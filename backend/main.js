/* eslint-disable no-restricted-syntax */
import * as fs from 'fs';
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

    utils.createFile(movie, Paths.output.movies, movieHTML);

    if (!fs.existsSync(`${Paths.output.movies}/${movie}`)) fs.mkdirSync(`${Paths.output.movies}/${movie}`);

    utils.createFile('index', `${Paths.output.movies}/${movie}`, movieHTML);
  });

  /*
    *******************
    All Movies
    *******************
  */
  utils.createFile(
    'index',
    Paths.output.movies,
    templates.allMovies(allMovies),
  );

  /*
    *******************
    TV Shows
    *******************
  */
  const tvshows = await fs.promises.readdir(`${Paths.content.tvshows}`);

  for (const show of tvshows) {
    const episodes = await fs.promises.readdir(`${Paths.content.tvshows}/${show}`);

    episodes.forEach((episode) => {
      let showFrontMatter = '';
      const showContent = utils.readFile(`${Paths.content.tvshows}/${show}/${episode}/index.md`);

      const md = new MarkdownIt()
        .use(frontMatterPlugin, (frontMatter) => {
          showFrontMatter = frontMatter;
        });
      const html = md.render(showContent);
      const showData = {
        content: html,
        frontmatter: showFrontMatter,
      };
      const showHTML = templates.single(showData);

      // eslint-disable-next-line no-console
      console.log(`Processing TV Show: ${showFrontMatter.title}`);

      if (!fs.existsSync(`${Paths.output.tvshows}/${show}`)) fs.mkdirSync(`${Paths.output.tvshows}/${show}`);
      if (!fs.existsSync(`${Paths.output.tvshows}/${show}/${episode}`)) fs.mkdirSync(`${Paths.output.tvshows}/${show}/${episode}`);

      utils.createFile('index', `${Paths.output.tvshows}/${show}/${episode}`, showHTML);
    });
  }

  const t1 = performance.now();

  // eslint-disable-next-line no-console
  console.log('----------------------------------------');
  // eslint-disable-next-line no-console
  console.log('End content creation');
  // eslint-disable-next-line no-console
  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
