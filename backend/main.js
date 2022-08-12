/* eslint-disable no-restricted-syntax */
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
if (!fs.existsSync(Paths.output.tvshows)) fs.mkdirSync(Paths.output.tvshows);
if (!fs.existsSync(Paths.output.images)) fs.mkdirSync(Paths.output.images);

(async () => {
  const t0 = performance.now();

  // eslint-disable-next-line no-console
  console.time('Start content creation');

  /*
    *******************
    Movies
    *******************
  */
  const movies = await fs.promises.readdir(`${Paths.content.movies}`);
  const allMovies = [];

  movies.forEach((movie) => {
    let movieFrontMatter = '';
    const movieContent = utils.readFile(`${Paths.content.movies}/${movie}/index.md`);

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
    console.log(`Processing movie: ${movieFrontMatter.title}`);

    if (!fs.existsSync(`${Paths.output.movies}/${slugify(movieFrontMatter.name)}`)) fs.mkdirSync(`${Paths.output.movies}/${slugify(movieFrontMatter.name)}`);

    utils.createFile('index.html', `${Paths.output.movies}/${slugify(movieFrontMatter.name)}`, movieHTML);
  });

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

    episodes.forEach((episode) => {
      let episodeFrontMatter = '';
      const episodeContent = utils.readFile(`${Paths.content.tvshows}/${show}/${episode}/index.md`);

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
      console.log(`Processing TV Show: ${episodeFrontMatter.title}`);

      if (!fs.existsSync(`${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}`)) fs.mkdirSync(`${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}`);
      if (!fs.existsSync(`${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}/${episode}`)) fs.mkdirSync(`${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}/${episode}`);

      utils.createFile('index.html', `${Paths.output.tvshows}/${slugify(episodeFrontMatter.name)}/${episode}`, episodeHTML);
    });

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

  // eslint-disable-next-line no-console
  console.log(allEpisodes);

  const lastMovies = allMovies.sort(utils.sortByDate).slice(0, 6);
  const lastShows = allEpisodes.sort(utils.sortByDate).slice(0, 6);
  const homepageHTML = templates.homepage(lastShows, lastMovies);

  utils.createFile('index.html', `${Paths.output.folder}`, homepageHTML);

  /*
    *******************
    RSS
    *******************
  */
  const template = templates.rss();

  const last20Movies = utils.getLastModified(Paths.content.movies, 20);
  const last20Shows = utils.getLastModified(Paths.content.tvshows, 20);
  const last20All = utils.getLastModified(Paths.content.blog, 20);

  const rssTVShows = template.replace(
    '%ITEMS%',
    last20Shows.map(templates.rssItem).join('\n'),
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
  utils.createFile('rss.xml', Paths.output.rss.all, rssAll);

  const t1 = performance.now();

  // eslint-disable-next-line no-console
  console.log('----------------------------------------');
  // eslint-disable-next-line no-console
  console.log('End content creation');
  // eslint-disable-next-line no-console
  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
