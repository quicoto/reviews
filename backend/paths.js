import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = `${__dirname}/..`;
const dist = `${root}/reviews`;

export default {
  template: {
    footer: `${root}/src/html/footer.html`,
    header: `${root}/src/html/header.html`,
    index: `${root}/src/html/single.html`,
    single: `${root}/src/html/single.html`,
    list: `${root}/src/html/list.html`,
  },
  content: {
    assets: `${root}/content/assets`,
    images: `${root}/content/covers`,
    movies: `${root}/content/movies`,
    tvshows: `${root}/content/tv-shows`,
  },
  output: {
    folder: dist,
    assets: `${dist}/assets`,
    images: `${dist}/covers`,
    movies: `${dist}/movies`,
    tvshows: `${dist}/tv-shows`,
  },
};
