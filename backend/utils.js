import * as fs from 'fs';

export function readFile(path) {
  return fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
}

export function createFile(name, path, data) {
  const fileName = `${name}.html`;
  fs.writeFileSync(`${path}/${fileName}`, data, (err) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log(`File created: ${fileName}`);
    }
  });
}
