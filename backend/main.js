import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import MarkdownIt from 'markdown-it';
import * as utils from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const md = new MarkdownIt();

const paths = {
  output: `${__dirname}/../dist`,
  movies: `${__dirname}/../content/movies`,
  tvshows: `${__dirname}/../content/tv-shows`,
};

// Create the requried folders
fs.mkdir(paths.output, () => {});

(async () => {
  const t0 = performance.now();

  // eslint-disable-next-line no-console
  console.time('Start content creation');

  const movies = await fs.promises.readdir(`${paths.movies}`);

  movies.forEach((movie) => {
    // eslint-disable-next-line no-console
    console.log(`Processing movie: ${movie}`);
    const movieContent = utils.readFile(`${paths.movies}/${movie}/index.md`);
    const html = md.render(movieContent);

    utils.createFile(movie, paths.output, html);
  });

  const t1 = performance.now();

  // eslint-disable-next-line no-console
  console.log('----------------------------------------');
  // eslint-disable-next-line no-console
  console.log('End content creation');
  // eslint-disable-next-line no-console
  console.log(`It took ${Number.parseFloat((t1 - t0) / 1000).toFixed(2)} seconds.`);
})();
