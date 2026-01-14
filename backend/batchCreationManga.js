import * as fs from 'fs';
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

/*
  *******************
  START Configuration
  *******************
*/
const showName = 'Kimetsu no Yaiba';
const chaptersStart = 98; // Included
const chaptersFinish = 106; // Included
const rating = 3;
/*
  *******************
  END Configuration
  *******************
*/

function _formatDate() {
  const now = new Date();

  function _fixNumber(number) {
    if (number < 10) number = `0${number}`;

    return number;
  }

  const day = _fixNumber(now.getDate());
  const month = _fixNumber(now.getMonth() + 1);

  return `${now.getFullYear()}-${month}-${day}T00:00:00`;
}

// Cache values that don't change per iteration
const formattedDate = _formatDate();
const ratingEmoji = '⭐️'.repeat(rating);
const showSlug = slugify(showName);
const showFolder = `${Paths.content.manga}/${showSlug}`;

// Create show folder once if it doesn't exist
await fs.promises.mkdir(showFolder, { recursive: true });

// Process all chapters in parallel for better performance
const fileCreationPromises = [];

for (let chapter = chaptersStart; chapter <= chaptersFinish; chapter += 1) {
  const template = `---
type: manga
title: ${showName}
date: "${formattedDate}"
name: "${showName}"
chapter: ${chapter}
rating: ${rating}
ratingEmoji: "${ratingEmoji}"
---

_[No review was written for this episode]_`;

  const episodeFolder = `${showFolder}/${chapter}`;
  const indexPath = `${episodeFolder}/index.md`;

  // Create a promise for each chapter's file creation
  const promise = (async () => {
    // Create episode folder
    await fs.promises.mkdir(episodeFolder, { recursive: true });

    // Check if file exists and create if it doesn't
    try {
      await fs.promises.access(indexPath);
    } catch {
      // File doesn't exist, create it
      await utils.createFile('index.md', episodeFolder, template);
    }
  })();

  fileCreationPromises.push(promise);
}

// Wait for all file creations to complete
await Promise.all(fileCreationPromises);
