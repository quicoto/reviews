import * as fs from 'fs';
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

/*
  *******************
  START Configuration
  *******************
*/
const showName = 'Black Mirror';
const seasons = 5;
const episodesPerSeason = [3, 4, 6, 6, 3];
const time = 60;
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
---

_[No review was written for this episode]_`;

    const showFolder = `${Paths.content.tvshows}/${slugify(showName)}`;
    const episodeFolder = `${Paths.content.tvshows}/${slugify(showName)}/${season}x${episode}`;

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
}
