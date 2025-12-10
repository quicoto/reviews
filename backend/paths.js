import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = `${__dirname}/..`;
const dist = `${root}/reviews`;

export default {
  template: {
    rss: `${root}/src/template.rss`,
    homepage: `${root}/src/html/homepage.html`,
    footer: `${root}/src/html/footer.html`,
    header: `${root}/src/html/header.html`,
    list: `${root}/src/html/list.html`,
  },
  content: {
    assets: `${root}/content/assets`,
    blog: `${root}/content/blog`,
    manga: `${root}/content/blog/manga`,
    movies: `${root}/content/blog/movies`,
    tvshows: `${root}/content/blog/tv-shows`,
    styles: `${root}/src/styles.css`,
  },
  output: {
    rss: {
      all: dist,
      tvshows: dist,
      manga: dist,
      movies: dist,
    },
    folder: dist,
    assets: `${dist}/assets`,
    movies: `${dist}/movies`,
    manga: `${dist}/manga`,
    tvshows: `${dist}/tv-shows`,
    styles: `${dist}/styles.css`,
  },
};
