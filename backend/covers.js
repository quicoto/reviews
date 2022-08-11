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
    console.log('\nCurrent directory filenames:');

    files.forEach((file) => {
      fs.copyFileSync(`${Paths.content.images}/${file}`, `${Paths.output.images}/${file}`);

      // eslint-disable-next-line no-console
      console.log(`Copying: ${file}`);
    });
  }
});
