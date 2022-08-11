/* eslint-disable no-param-reassign */
import slugify from '@sindresorhus/slugify';
import * as utils from './utils.js';
import Paths from './paths.js';

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

    stars.push(`<img src="${utils.createAbsoluteURL(src)}" alt="Star ${i}" />`);
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
    time,
    title,
    date,
    name,
    season,
    episode,
    rating,
    ratingEmoji,
    share,
  } = frontmatter;

  const image = utils.createAbsoluteURL(`covers/${slugify(name)}.jpg`);

  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const singleTemplate = utils.readFile(Paths.template.single);

  return singleTemplate
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', content)
    .replaceAll('%TITLE%', title)
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
    <time>${movie.frontmatter.date}</time>
    <div class="rating">${_rating(movie.frontmatter.rating).join('\n')}</div>
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
