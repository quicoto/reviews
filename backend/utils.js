import * as fs from 'fs';

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
  });
}

/**
 * @param  {number} number
 * @returns {number}
 */
export function roundHalf(number) {
  return Math.round(number * 2) / 2;
}
