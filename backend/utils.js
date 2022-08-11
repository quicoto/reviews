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
