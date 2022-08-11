/* eslint-disable no-restricted-syntax */
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
fs.mkdir(Paths.output.images, () => {});

(async () => {
  const t0 = performance.now();

  // eslint-disable-next-line no-console
  console.time('Start content creation');

  // const movies = await fs.promises.readdir(`${Paths.content.movies}`);

  // movies.forEach((movie) => {
  //   let movieFrontMatter = '';
  //   const movieContent = utils.readFile(`${Paths.content.movies}/${movie}/index.md`);

  //   const md = new MarkdownIt()
  //     .use(frontMatterPlugin, (frontMatter) => {
  //       movieFrontMatter = frontMatter;
  //     });
  //   const html = md.render(movieContent);
  //   const movieData = templates.single({
  //     content: html,
  //     title: movieFrontMatter.title,
  //     imageId: `${movie}`,
  //   });

  //   // eslint-disable-next-line no-console
  //   console.log(`Processing movie: ${movieFrontMatter.title}`);

  //   utils.createFile(movie, Paths.output.movies, movieData);
  // });

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
      const showData = templates.single({
        content: html,
        title: showFrontMatter.title,
        imageId: `${show}`,
      });

      // eslint-disable-next-line no-console
      console.log(`Processing tv show: ${showFrontMatter.title}`);

      fs.mkdir(`${Paths.content.tvshows}/${show}`, () => {});
      fs.mkdir(`${Paths.content.tvshows}/${show}/${episode}`, () => {});

      utils.createFile(episode, `${Paths.content.tvshows}/${show}/${episode}`, showData);
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
