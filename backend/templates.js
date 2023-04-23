/* eslint-disable no-param-reassign */
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

const mangaImageSuffix = '-manga';

function _createShowAnchor(showName) {
  return utils.createAbsoluteURL(
    `tv-shows#${slugify(showName)}`,
  );
}

function _rating(rating) {
  const starFull = 'assets/star.svg';
  const starEmpty = 'assets/star-empty.svg';
  const starHalf = 'assets/star-half.svg';
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    let src = starFull;

    if (i > rating) {
      src = starEmpty;

      if ((rating - i) % 1 !== 0) {
        src = starHalf;
        rating -= 0.5;
      } else {
        rating -= 1;
      }
    }

    stars.push(`<img width="35" src="${utils.createAbsoluteURL(src)}" alt="Star ${i}" />`);
  }

  return stars;
}

/**
 * @param  {object} config
 * @param  {string} config.content
 * @param  {object} config.frontmatter
 * @param  {number} config.averageRating
 * @return {string}
 */
export function single(config) {
  const {
    averageRating,
    content,
    frontmatter,
  } = config;
  const {
    type,
    title,
    date,
    name,
    rating,
  } = frontmatter;
  let imageName = slugify(name);

  if (type === 'manga') {
    imageName += mangaImageSuffix;
  }

  const image = utils.createAbsoluteURL(`covers/${imageName}.jpg`);
  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const singleTemplate = utils.readFile(Paths.template.single);
  const reviewDate = utils.formatDate(date);
  let backLink = '';

  if (type === 'series') {
    const url = _createShowAnchor(name);
    backLink = `<a href="${url}" title="More reviews for ${name}">More reviews for ${name}</a>`;
  }

  return singleTemplate
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', content)
    .replaceAll('%TITLE%', title)
    .replaceAll('%TIME%', reviewDate)
    .replaceAll('%BACKLINK%', backLink)
    .replaceAll('%RATING%', _rating(averageRating || rating).join('\n'))
    .replaceAll('%IMAGE%', image);
}

function _movieItem(movie) {
  const url = utils.createAbsoluteURL(
    `movies/${slugify(movie.frontmatter.name)}`,
  );
  return `
  <li>
    <h3><a href="${url}" title="${movie.frontmatter.title}">${movie.frontmatter.title}</a></h3>
    <div class="meta">
      <div class="rating">${_rating(movie.frontmatter.rating).join('\n')}</div>
      <time>${utils.formatDate(movie.frontmatter.date)}</time>
    </div>
  </li>
`;
}

export function allMovies(list) {
  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const html = utils.readFile(Paths.template.list);
  const content = list.map(_movieItem).join('\n');

  return html
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', `<ul>${content}</ul>`)
    .replaceAll('%TITLE%', 'All Movie Reviews');
}

function _showsItem(show) {
  const episodes = utils.sortEpisodes(show.episodes);
  const episodesList = episodes.map(
    (episode) => `<li>
      <a href="${utils.createURL(episode)}" title="${episode.frontmatter.name} ${episode.frontmatter.season}x${episode.frontmatter.episode}">${episode.frontmatter.season}x${episode.frontmatter.episode}</a>
    </li>`,
  ).join('\n');

  const averageRating = utils.averageRating(episodes);
  const anchor = slugify(show.episodes[0].frontmatter.name);

  return `
  <li>
    <h3 id="${anchor}"><a href="#${anchor}" class="show-anchor">#</a> ${show.episodes[0].frontmatter.name}</h3>
    <div class="rating">${_rating(averageRating).join('\n')}</div>
    <ul class="episode-list">${episodesList}</ul>
  </li>
`;
}

export function allShows(list) {
  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const html = utils.readFile(Paths.template.list);
  const content = list.map(_showsItem).join('\n');

  return html
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', `<ul>${content}</ul>`)
    .replaceAll('%TITLE%', 'All TV Show Reviews');
}

function _card(itemData) {
  let imageName = slugify(itemData.frontmatter.name);

  if (itemData.frontmatter.type === 'manga') {
    imageName += mangaImageSuffix;
  }

  const imageSrc = utils.createAbsoluteURL(`covers/${imageName}.jpg`);

  return `
  <li class="card">
    <h3 class="card-heading">
      <a title="${itemData.frontmatter.title}" class="card-link" href="${utils.createURL(itemData)}">
        <img
          class="card-image cover" src="${imageSrc}" alt="${itemData.frontmatter.title} cover" title="${itemData.frontmatter.title}">
        <div>${itemData.frontmatter.title}</div>
      </a>
    </h3>
    <div class="card-footer">
      <time>${utils.formatDate(itemData.frontmatter.date)}</time>
      <div class="rating">${_rating(itemData.frontmatter.rating).join('\n')}</div>
    </div>
  </li>`;
}

function _mangaItem(show) {
  const volumes = utils.sortVolumes(show.volumes);
  const volumeList = volumes.map(
    (episode) => `<li>
      <a href="${utils.createURL(episode)}" title="${episode.frontmatter.name} ${episode.frontmatter.volume}">${episode.frontmatter.volume}</a>
    </li>`,
  ).join('\n');

  const averageRating = utils.averageRating(volumes);
  const anchor = slugify(show.volumes[0].frontmatter.name);

  return `
  <li>
    <h3 id="${anchor}"><a href="#${anchor}" class="show-anchor">#</a> ${show.volumes[0].frontmatter.name}</h3>
    <div class="rating">${_rating(averageRating).join('\n')}</div>
    <ul class="episode-list">${volumeList}</ul>
  </li>
`;
}

export function allManga(list) {
  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const html = utils.readFile(Paths.template.list);
  const content = list.map(_mangaItem).join('\n');

  return html
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', `<ul>${content}</ul>`)
    .replaceAll('%TITLE%', 'All Manga Reviews');
}

/**
 * @param {object} conifg
 * @param  {array} config.latestShows
 * @param  {array} config.latestManga
 * @param {number} config.minnutesWatched
 * @param {number} config.uniqueMovies
 * @param {number} config.uniqueTVShows
 * @param {number} config.volumesRead
 * @param {array} config.topRatedTVShows
 * @return {string}
 */
export function homepage(config) {
  const {
    latestShows,
    latestManga,
    minutesWatched,
    uniqueMovies,
    uniqueTVShows,
    topRatedTVShows,
    volumesRead,
  } = config;
  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const html = utils.readFile(Paths.template.homepage);
  const formatTimeWatched = new Intl.NumberFormat('en-US').format(Math.round(minutesWatched / 60));

  return html
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%LATEST_SHOWS%', `<ul class="cards">${latestShows.map(_card).join('\n')}</ul>`)
    .replaceAll('%LATEST_MANGA%', `<ul class="cards">${latestManga.map(_card).join('\n')}</ul>`)
    .replaceAll('%TOP_RATED%', `<ol class="topRatedTVShows">${topRatedTVShows}</ol>`)
    .replaceAll('%MINUTESWATCHED%', formatTimeWatched)
    .replaceAll('%UNIQUEMOVIES%', uniqueMovies)
    .replaceAll('%UNIQUETVSHOWS%', uniqueTVShows)
    .replaceAll('%VOLUMESREAD%', volumesRead)
    .replaceAll('%TITLE%', 'Home');
}

function _feedDescription(item) {
  const type = `${
    item.frontmatter.type === 'series' ? 'Episode' : 'Movie'
  } review`;

  return `📺 Just watched: ${item.frontmatter.title}\n\nRating: ${
    item.frontmatter.ratingEmoji
  }\n\n${type} 👇\n${utils.createURL(item, true)}`;
}

export function rssItem(itemData) {
  return `<item>
  <title><![CDATA[${itemData.frontmatter.title}]]></title>
  <description><![CDATA[${_feedDescription(itemData)}]]></description>
  <link>${utils.createURL(itemData, true)}</link>
  <guid isPermaLink="true">${utils.createURL(itemData, true)}</guid>
  <pubDate>${utils.formatRSSDate(itemData.frontmatter.date)}</pubDate>
</item>`;
}

export function rss() {
  const xml = utils.readFile(Paths.template.rss);
  const buildDate = utils.formatRSSDate();

  return xml.replaceAll('%BUILDDATE%', buildDate);
}

/**
 * @param  {object} show
 * @param  {string} show.name
 * @param  {string} show.averageRating
 * @param {array} show.episodes
 * @return {string}
 */
export function topRatedTVShow(show) {
  const prettyName = show.episodes[0].frontmatter.name;

  return `<li>
    <h4>
      <a title="${prettyName}" href="${_createShowAnchor(show.name)}">${prettyName}</a>
    </h4>
  </li>`;
}
