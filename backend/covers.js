import * as fs from 'fs';
import Paths from './paths.js';

// Create the requried folders
fs.mkdir(Paths.output.folder, () => {});
fs.mkdir(Paths.output.images, () => {});

fs.readdir(Paths.content.images, (err, files) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    // eslint-disable-next-line no-console
    if (!process.env.NODE_ENV) console.log('\nCurrent directory filenames:');

    for (let index = 0, len = files.length; index < len; index += 1) {
      const file = files[index];

      fs.copyFileSync(`${Paths.content.images}/${file}`, `${Paths.output.images}/${file}`);

      // eslint-disable-next-line no-console
      if (!process.env.NODE_ENV) console.log(`Copying: ${file}`);
    }
  }
});
