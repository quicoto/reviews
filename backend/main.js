/* eslint-disable no-restricted-syntax */
import process from 'process';
import * as fs from 'fs';
import slugify from '@sindresorhus/slugify';
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
if (!fs.existsSync(Paths.output.images)) fs.mkdirSync(Paths.output.images);

(async () => {
  const t0 = performance.now();

  // eslint-disable-next-line no-console
  console.log('Start content creation');

  /*
    *******************
    Movies
    *******************
  */
  const movies = await fs.promises.readdir(`${Paths.content.movies}`);
  const allMovies = [];

  for (let index = 0, len = movies.length; index < len; index += 1) {
    let movieFrontMatter = '';
    const movieContent = utils.readFile(`${Paths.content.movies}/${movies[index]}/index.md`);

    const md = new MarkdownIt()
      .use(frontMatterPlugin, (frontMatter) => {
        movieFrontMatter = frontMatter;
      });
    const html = md.render(movieContent);
    const movieData = {
      content: html,
      frontmatter: movieFrontMatter,
    };
    const movieHTML = templates.single(movieData);
    allMovies.push(movieData);

    // eslint-disable-next-line no-console
    if (!process.env.NODE_ENV) console.log(`Processing movie: ${movieFrontMatter.title}`);

    const movieFolder = `${Paths.output.movies}/${slugify(movieFrontMatter.name)}`;

    if (!fs.existsSync(movieFolder)) {
      fs.mkdirSync(movieFolder);
    }

    utils.createFile('index.html', `${Paths.output.movies}/${slugify(movieFrontMatter.name)}`, movieHTML);
  }

  /*
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
      let chapterFrontMatter = '';
      const chapterContent = utils.readFile(`${Paths.content.manga}/${show}/${chapters[index]}/index.md`);

      const md = new MarkdownIt()
        .use(frontMatterPlugin, (frontMatter) => {
          chapterFrontMatter = frontMatter;
        });
      const html = md.render(chapterContent);
      const chapterData = {
        content: html,
        frontmatter: chapterFrontMatter,
      };
      const chapterHTML = templates.single(chapterData);

      allchapters.push(chapterData);
      currentShow.chapters.push(chapterData);

      // eslint-disable-next-line no-console
      if (!process.env.NODE_ENV) console.log(`Processing Manga: ${chapterFrontMatter.title}`);

      const showFolder = `${Paths.output.manga}/${slugify(chapterFrontMatter.name)}`;
      const chaptersFolder = `${Paths.output.manga}/${slugify(chapterFrontMatter.name)}/${chapters[index]}`;

      if (!fs.existsSync(showFolder)) {
        fs.mkdirSync(showFolder);
      }

      if (!fs.existsSync(chaptersFolder)) {
        fs.mkdirSync(chaptersFolder);
      }

      utils.createFile('index.html', chaptersFolder, chapterHTML);
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
      let episodeFrontMatter = '';
      const episodeContent = utils.readFile(`${Paths.content.tvshows}/${show}/${episodes[index]}/index.md`);

      const md = new MarkdownIt()
        .use(frontMatterPlugin, (frontMatter) => {
          episodeFrontMatter = frontMatter;
        });
      const html = md.render(episodeContent);
      const episodeData = {
        content: html,
        frontmatter: episodeFrontMatter,
      };
      const episodeHTML = templates.single(episodeData);

      allEpisodes.push(episodeData);
      currentShow.episodes.push(episodeData);

      // eslint-disable-next-line no-console
      if (!process.env.NODE_ENV) console.log(`Processing TV Show: ${episodeFrontMatter.title}`);

      const showFolder = `${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}`;
      const episodeFolder = `${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}/${episodes[index]}`;

      if (!fs.existsSync(showFolder)) {
        fs.mkdirSync(showFolder);
      }

      if (!fs.existsSync(episodeFolder)) {
        fs.mkdirSync(episodeFolder);
      }

      utils.createFile('index.html', episodeFolder, episodeHTML);
    }

    currentShow.averageRating = utils.averageRating(currentShow.episodes);

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
    const showTime = +allShows[index].episodes
      .find((episode) => episode.frontmatter.time).frontmatter.time;
    const totalTime = showTime * allShows[index].episodes.length;

    showsMinutesWatched += totalTime;
  }

  const topRatedTVShows = allShows.sort(utils.sortByRatingAndEpisodes)
    .filter((show) => show.episodes.length > 4) // Discard shows that I probably dropped
    .slice(0, 10)
    .map((show) => templates.topRatedTVShow(show))
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
    .filter((item) => item.frontmatter.share === 'true')
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

  // eslint-disable-next-line no-console
  console.log('----------------------------------------');
  // eslint-disable-next-line no-console
  console.log('End content creation');
  // eslint-disable-next-line no-console
  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
