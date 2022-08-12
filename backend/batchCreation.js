import * as fs from 'fs';
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

/*
  *******************
  START Configuration
  *******************
*/
const showName = 'The X-Files';
const time = 45;
const seasons = 1;
const episodesPerSeason = [2];
const rating = 3;
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
  const hours = _fixNumber(now.getHours());
  const minutes = _fixNumber(now.getMinutes());
  const seconds = _fixNumber(now.getSeconds());

  return `${now.getFullYear()}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

for (let season = 1; season <= seasons; season += 1) {
  for (let episode = 1; episode <= episodesPerSeason[season - 1]; episode += 1) {
    const template = `---
type: series
time: ${time}
title: ${showName} ${season}x${episode}
date: "${_formatDate()}"
name: "${showName}"
season: ${season}
episode: ${episode}
rating: ${rating}
ratingEmoji: "${'⭐️'.repeat(rating)}"
share: false
---

*[No review was written for this episode]*`;

    const showFolder = `${Paths.content.tvshows}/${slugify(showName)}`;
    const episodeFolder = `${Paths.content.tvshows}/${slugify(showName)}/${season}x${episode}`;

    if (!fs.existsSync(showFolder)) {
      fs.mkdirSync(showFolder);
    }

    if (!fs.existsSync(episodeFolder)) {
      fs.mkdirSync(episodeFolder);
    }

    utils.createFile(
      'index.html',
      episodeFolder,
      template,
    );
  }
}
