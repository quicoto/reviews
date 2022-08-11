import * as fs from 'fs';
import MarkdownIt from 'markdown-it';
import * as utils from './utils.js';
import { frontMatterPlugin } from './frontmatter.js';
import * as templates from './templates.js';
import Paths from './paths.js';

// Create the requried folders
fs.mkdir(Paths.output.folder, () => {});
fs.mkdir(Paths.output.movies, () => {});
fs.mkdir(Paths.output.tvshows, () => {});

(async () => {
  const t0 = performance.now();

  // eslint-disable-next-line no-console
  console.time('Start content creation');

  const movies = await fs.promises.readdir(`${Paths.content.movies}`);

  movies.forEach((movie) => {
    let movieData = '';
    const movieContent = utils.readFile(`${Paths.content.movies}/${movie}/index.md`);

    const md = new MarkdownIt()
      .use(frontMatterPlugin, (frontMatter) => {
        movieData = frontMatter;
      });

    const html = md.render(movieContent);
    const movieHTML = templates.single({
      content: html,
      title: movieData.title,
    });

    // eslint-disable-next-line no-console
    console.log(movieData);

    // eslint-disable-next-line no-console
    console.log(`Processing movie: ${movieData.title}`);

    utils.createFile(movie, Paths.output.movies, movieHTML);
  });

  const t1 = performance.now();

  // eslint-disable-next-line no-console
  console.log('----------------------------------------');
  // eslint-disable-next-line no-console
  console.log('End content creation');
  // eslint-disable-next-line no-console
  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
