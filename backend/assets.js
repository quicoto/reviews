import * as fs from 'fs';
import Paths from './paths.js';

// Create the requried folders
fs.mkdir(Paths.output.folder, () => {});
fs.mkdir(Paths.output.assets, () => {});

fs.readdir(Paths.content.assets, (err, files) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } else {
    // eslint-disable-next-line no-console
    if (!process.env.NODE_ENV) console.log('\nCurrent directory filenames:');

    files.forEach((file) => {
      fs.copyFileSync(`${Paths.content.assets}/${file}`, `${Paths.output.assets}/${file}`);

      // eslint-disable-next-line no-console
      if (!process.env.NODE_ENV) console.log(`Copying: ${file}`);
    });
  }
});
