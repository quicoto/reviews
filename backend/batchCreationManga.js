import * as fs from 'fs';
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

/*
  *******************
  START Configuration
  *******************
*/
const showName = 'Naruto';
const chaptersStart = 300; // Included
const chaptersFinish = 309; // Included
const rating = 4;
/*
  *******************
  END Configuration
  *******************
*/

function _formatDate() {
  const now = new Date();

  function _fixNumber(number) {
    // eslint-disable-next-line no-param-reassign
    if (number < 10) number = `0${number}`;

    return number;
  }

  const day = _fixNumber(now.getDate());
  const month = _fixNumber(now.getMonth() + 1);

  return `${now.getFullYear()}-${month}-${day}T00:00:00`;
}

for (let chapter = chaptersStart; chapter <= chaptersFinish; chapter += 1) {
  const template = `---
type: manga
title: ${showName}
date: "${_formatDate()}"
name: "${showName}"
chapter: ${chapter}
rating: ${rating}
ratingEmoji: "${'⭐️'.repeat(rating)}"
---

_[No review was written for this episode]_`;

  const showFolder = `${Paths.content.manga}/${slugify(showName)}`;
  const episodeFolder = `${Paths.content.manga}/${slugify(showName)}/${chapter}`;

  if (!fs.existsSync(showFolder)) {
    fs.mkdirSync(showFolder);
  }

  if (!fs.existsSync(episodeFolder)) {
    fs.mkdirSync(episodeFolder);
  }

  if (!fs.existsSync(`${episodeFolder}/index.md`)) {
    utils.createFile(
      'index.md',
      episodeFolder,
      template,
    );
  }
}
