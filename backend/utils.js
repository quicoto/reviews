import * as fs from 'fs';
import * as nodePath from 'path';
import slugify from '@sindresorhus/slugify';

export function readFile(path) {
  return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
}

export function createFile(fileName, path, data) {
  const processeData = data.replaceAll('%VERSION%', process.env.npm_package_version);

  fs.writeFileSync(`${path}/${fileName}`, processeData, (err) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(`File created: ${fileName}`);
    }
  });
}

export function createAbsoluteURL(path, withDomain = false) {
  let url = `/reviews/${path}`;

  if (withDomain) {
    url = `https://quicoto.github.io${url}`;
  }

  return url;
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

export function sortByDate(show1, show2) {
  const date1 = new Date(show1.frontmatter.date);
  const date2 = new Date(show2.frontmatter.date);

  if (date1 < date2) return 1;
  if (date1 > date2) return -1;

  return 0;
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

export function getDirectoryFiles(source) {
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
}

export function getLastModified(parentDirectory, limit) {
  const files = getDirectoryFiles(parentDirectory);
  const lastModified = files.sort((a, b) => b.modified - a.modified);

  return lastModified.slice(0, limit);
}

export function formatRSSDate(date) {
  let newDate = new Date();

  if (date) newDate = new Date(date);

  return new Date(newDate).toUTCString();
}

export function createURL(itemData, withDomain = false) {
  let url = '';

  if (itemData.frontmatter.type === 'movie') {
    url = createAbsoluteURL(
      `movies/${slugify(itemData.frontmatter.name)}/`,
      withDomain,
    );
  } else if (itemData.frontmatter.type === 'series') {
    url = createAbsoluteURL(
      `tv-shows/${slugify(itemData.frontmatter.name)}/${itemData.frontmatter.season}x${itemData.frontmatter.episode}`,
      withDomain,
    );
  }

  return url;
}
