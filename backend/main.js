import process from 'process';
import * as fs from 'fs';
import * as utils from './utils.js';
import * as templates from './templates.js';
import Paths from './paths.js';

// Create the requried folders
if (!fs.existsSync(Paths.output.folder)) fs.mkdirSync(Paths.output.folder);
if (!fs.existsSync(Paths.output.movies)) fs.mkdirSync(Paths.output.movies);
if (!fs.existsSync(Paths.output.manga)) fs.mkdirSync(Paths.output.manga);
if (!fs.existsSync(Paths.output.tvshows)) fs.mkdirSync(Paths.output.tvshows);

(async () => {
  const t0 = performance.now();


  console.log('Start content creation');

  /*
    *******************
    Movies
    *******************
  */
  const movies = await fs.promises.readdir(`${Paths.content.movies}`);

  const allMovies = await Promise.all(
    movies.map(async (movie) => {
      const movieContent = await fs.promises.readFile(`${Paths.content.movies}/${movie}/index.md`, 'utf8');
      const frontMatter = utils.parseFrontMatter(movieContent);

      if (!process.env.NODE_ENV) console.log(`Processing movie: ${frontMatter.title}`);

      return { frontmatter: frontMatter };
    })
  );  /*
    *******************
    All Movies
    *******************
  */
  const allMoviesPromise = utils.createFile(
    'index.html',
    Paths.output.movies,
    templates.allMovies(allMovies),
  );

  /*
    *******************
    Manga
    *******************
  */
  const manga = await fs.promises.readdir(`${Paths.content.manga}`);

  const allManga = await Promise.all(
    manga.map(async (show) => {
      const chapters = await fs.promises.readdir(`${Paths.content.manga}/${show}`);

      const chapterDataArray = await Promise.all(
        chapters.map(async (chapter) => {
          const chapterContent = await fs.promises.readFile(`${Paths.content.manga}/${show}/${chapter}/index.md`, 'utf8');
          const frontMatter = utils.parseFrontMatter(chapterContent);

          if (!process.env.NODE_ENV) console.log(`Processing Manga: ${frontMatter.title}`);

          return { frontmatter: frontMatter };
        })
      );

      return {
        name: show,
        chapters: chapterDataArray,
        averageRating: utils.averageRating(chapterDataArray),
      };
    })
  );

  const allchapters = allManga.flatMap(show => show.chapters);

  /*
    *******************
    All Manga
    *******************
  */
  const allMangaPromise = utils.createFile(
    'index.html',
    Paths.output.manga,
    templates.allManga(allManga),
  );

  /*
    *******************
    TV Shows
    *******************
  */
  const tvshows = await fs.promises.readdir(`${Paths.content.tvshows}`);

  const allShows = await Promise.all(
    tvshows.map(async (show) => {
      const episodes = await fs.promises.readdir(`${Paths.content.tvshows}/${show}`);

      const episodeDataArray = await Promise.all(
        episodes.map(async (episode) => {
          const episodeContent = await fs.promises.readFile(`${Paths.content.tvshows}/${show}/${episode}/index.md`, 'utf8');
          const frontMatter = utils.parseFrontMatter(episodeContent);

          if (!process.env.NODE_ENV) console.log(`Processing TV Show: ${frontMatter.title}`);

          return { frontmatter: frontMatter };
        })
      );

      return {
        name: show,
        episodes: episodeDataArray,
        averageRating: utils.averageRating(episodeDataArray),
      };
    })
  );

  const allEpisodes = allShows.flatMap(show => show.episodes);

  /*
    *******************
    All TV Shows
    *******************
  */
  const allShowsPromise = utils.createFile(
    'index.html',
    Paths.output.tvshows,
    templates.allShows(allShows),
  );

  /*
    *******************
    Homepage
    *******************
  */
  let showsMinutesWatched = 0;
  const moviesMinutesWatched = (allMovies.length * 120);

  for (let index = 0, len = allShows.length; index < len; index += 1) {
    const currentEpisode = +allShows[index].episodes
      .find((episode) => episode.frontmatter.time);
    const showTime = currentEpisode?.frontmatter?.time ? +currentEpisode.frontmatter.time : 24;
    const totalTime = showTime * allShows[index].episodes.length;

    showsMinutesWatched += totalTime;
  }

  const topRatedTVShows = allShows.sort(utils.sortByRatingAndEpisodes)
    .filter((show) => show.episodes.length > 4)
    .slice(0, 10)
    .map((show) => templates.topRatedTVShow(show))
    .join('');

  const topRatedManga = allManga.sort(utils.sortByRatingAndChapters)
    .filter((item) => item.chapters.length > 4)
    .slice(0, 10)
    .map((item) => templates.topRatedMangas(item))
    .join('');

  const latestShows = allEpisodes.sort(utils.sortByDate).slice(0, 6);
  const latestManga = allchapters.sort(utils.sortByDate).slice(0, 6);
  const homepageHTML = templates.homepage({
    latestShows,
    latestManga,
    minutesWatched: moviesMinutesWatched + showsMinutesWatched,
    uniqueMovies: allMovies.length,
    uniqueTVShows: allShows.length,
    topRatedTVShows,
    topRatedManga,
    chaptersRead: allchapters.length,
  });

  const homepagePromise = utils.createFile('index.html', `${Paths.output.folder}`, homepageHTML);

  /*
    *******************
    RSS
    *******************
  */
  const template = templates.rss();

  const last20Movies = allMovies.sort(utils.sortByDate).slice(0, 20);
  const last20Episodes = allEpisodes.sort(utils.sortByDate).slice(0, 20);
  const last20chapters = allchapters.sort(utils.sortByDate).slice(0, 20);

  const last20All = allEpisodes.concat(allMovies)
    .filter((item) => item.frontmatter?.share === 'true')
    .sort(utils.sortByDate).slice(0, 20);

  const rssTVShows = template.replace(
    '%ITEMS%',
    last20Episodes.map(templates.rssItem).join('\n'),
  );
  const rssManga = template.replace(
    '%ITEMS%',
    last20chapters.map(templates.rssItem).join('\n'),
  );
  const rssMovies = template.replace(
    '%ITEMS%',
    last20Movies.map(templates.rssItem).join('\n'),
  );
  const rssAll = template.replace(
    '%ITEMS%',
    last20All.map(templates.rssItem).join('\n'),
  );

  await Promise.all([
    allMoviesPromise,
    allMangaPromise,
    allShowsPromise,
    homepagePromise,
    utils.createFile('rss-all-shows.xml', Paths.output.rss.tvshows, rssTVShows),
    utils.createFile('rss-all-movies.xml', Paths.output.rss.movies, rssMovies),
    utils.createFile('rss-all-manga.xml', Paths.output.rss.manga, rssManga),
    utils.createFile('rss.xml', Paths.output.rss.all, rssAll),
  ]);

  const t1 = performance.now();


  console.log('----------------------------------------');

  console.log('End content creation');

  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
