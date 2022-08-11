import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = `${__dirname}/..`;
const dist = `${root}/dist`;

export default {
  template: {
    footer: `${root}/src/html/footer.html`,
    header: `${root}/src/html/header.html`,
    index: `${root}/src/html/single.html`,
    single: `${root}/src/html/single.html`,
  },
  content: {
    movies: `${root}/content/movies`,
    tvshows: `${root}/content/tv-shows`,
  },
  output: {
    folder: dist,
    movies: `${dist}/movies`,
    tvshows: `${dist}/tv-shows`,
  },
};
