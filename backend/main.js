import process from 'process';
import * as fs from 'fs';
import MarkdownIt from 'markdown-it';
import * as utils from './utils.js';
import { frontMatterPlugin } from './frontmatter.js';
import * as templates from './templates.js';
import Paths from './paths.js';

// Create the requried folders
if (!fs.existsSync(Paths.output.folder)) fs.mkdirSync(Paths.output.folder);
if (!fs.existsSync(Paths.output.movies)) fs.mkdirSync(Paths.output.movies);
if (!fs.existsSync(Paths.output.manga)) fs.mkdirSync(Paths.output.manga);
if (!fs.existsSync(Paths.output.tvshows)) fs.mkdirSync(Paths.output.tvshows);

// Create a single MarkdownIt instance configured once
const md = new MarkdownIt();
let currentFrontMatter = '';

// Register the plugin only once with a callback that updates the currentFrontMatter
md.use(frontMatterPlugin, (fm) => {
  currentFrontMatter = fm;
});

// Helper function that renders markdown and returns both HTML and frontmatter
function renderMarkdownWithFrontMatter(content) {
  currentFrontMatter = '';  // Reset before rendering
  const html = md.render(content);
  return { html, frontMatter: currentFrontMatter };
}

(async () => {
  const t0 = performance.now();


  console.log('Start content creation');

  /*
    *******************
    Movies
    *******************
  */
  const movies = await fs.promises.readdir(`${Paths.content.movies}`);
  const allMovies = [];

  for (let index = 0, len = movies.length; index < len; index += 1) {
    const movieContent = utils.readFile(`${Paths.content.movies}/${movies[index]}/index.md`);
    const { html, frontMatter } = renderMarkdownWithFrontMatter(movieContent);

    const movieData = {
      content: html,
      frontmatter: frontMatter,
    };
    allMovies.push(movieData);

    if (!process.env.NODE_ENV) console.log(`Processing movie: ${frontMatter.title}`);
  }  /*
    *******************
    All Movies
    *******************
  */
  utils.createFile(
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
  const allManga = [];
  const allchapters = [];

  for (const show of manga) {
    const chapters = await fs.promises.readdir(`${Paths.content.manga}/${show}`);
    const currentShow = {
      name: show,
      chapters: [],
    };

    for (let index = 0, len = chapters.length; index < len; index += 1) {
      const chapterContent = utils.readFile(`${Paths.content.manga}/${show}/${chapters[index]}/index.md`);
      const { html, frontMatter } = renderMarkdownWithFrontMatter(chapterContent);

      const chapterData = {
        content: html,
        frontmatter: frontMatter,
      };

      allchapters.push(chapterData);
      currentShow.chapters.push(chapterData);

      if (!process.env.NODE_ENV) console.log(`Processing Manga: ${frontMatter.title}`);
    }

    currentShow.averageRating = utils.averageRating(currentShow.chapters);

    allManga.push(currentShow);
  }

  /*
    *******************
    All Manga
    *******************
  */
  utils.createFile(
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
  const allShows = [];
  const allEpisodes = [];

  for (const show of tvshows) {
    const episodes = await fs.promises.readdir(`${Paths.content.tvshows}/${show}`);
    const currentShow = {
      name: show,
      episodes: [],
    };

    for (let index = 0, len = episodes.length; index < len; index += 1) {
      const episodeContent = utils.readFile(`${Paths.content.tvshows}/${show}/${episodes[index]}/index.md`);
      const { html, frontMatter } = renderMarkdownWithFrontMatter(episodeContent);

      const episodeData = {
        content: html,
        frontmatter: frontMatter,
      };

      allEpisodes.push(episodeData);
      currentShow.episodes.push(episodeData);


      if (!process.env.NODE_ENV) console.log(`Processing TV Show: ${frontMatter.title}`);
    }    currentShow.averageRating = utils.averageRating(currentShow.episodes);

    allShows.push(currentShow);
  }

  /*
    *******************
    All TV Shows
    *******************
  */
  utils.createFile(
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

  utils.createFile('index.html', `${Paths.output.folder}`, homepageHTML);

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

  utils.createFile('rss-all-shows.xml', Paths.output.rss.tvshows, rssTVShows);
  utils.createFile('rss-all-movies.xml', Paths.output.rss.movies, rssMovies);
  utils.createFile('rss-all-manga.xml', Paths.output.rss.manga, rssManga);
  utils.createFile('rss.xml', Paths.output.rss.all, rssAll);

  const t1 = performance.now();


  console.log('----------------------------------------');

  console.log('End content creation');

  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
