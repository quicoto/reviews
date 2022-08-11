import * as fs from 'fs';
import * as nodePath from 'path';

export function readFile(path) {
  return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
}

export function createFile(name, path, data) {
  const fileName = `${name}.html`;
  const processeData = data.replaceAll('%VERSION%', process.env.npm_package_version);

  fs.writeFileSync(`${path}/${fileName}`, processeData, (err) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(`File created: ${fileName}`);
    }
  });
}

export function createAbsoluteURL(path) {
  return `/reviews/${path}`;
}

export function sortEpisodes(list) {
  return list.sort((show1, show2) => {
    if (+show1.frontmatter.season < +show2.frontmatter.season) return -1;
    if (+show1.frontmatter.season > +show2.frontmatter.season) return 1;

    if (+show1.frontmatter.episode < +show2.frontmatter.episode) return -1;
    if (+show1.frontmatter.episode > +show2.frontmatter.episode) return 1;

    return 0;
  });
}

/**
 * @param  {number} number
 * @returns {number}
 */
export function roundHalf(number) {
  return Math.round(number * 2) / 2;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getLastModified(parentDirectory, limit) {
  const getDirectories = (source) => {
    const files = [];

    function getFiles(dir) {
      fs.readdirSync(dir).map((file) => {
        const absolutePath = nodePath.join(dir, file);

        const stats = fs.statSync(absolutePath);

        if (fs.statSync(absolutePath).isDirectory()) {
          return getFiles(absolutePath);
        }
        const modified = {
          name: file,
          dir,
          created: stats.birthtime,
          modified: stats.mtime,
        };
        return files.push(modified);
      });
    }

    getFiles(source);
    return files;
  };

  const files = getDirectories(parentDirectory);
  const lastModified = files.sort((a, b) => b.modified - a.modified);

  return lastModified.slice(0, limit);
}
