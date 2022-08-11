import * as utils from './utils.js';
import Paths from './paths.js';

/**
 * @param  {object} config
 * @param  {string} config.content
 * @param  {string} config.title
 * @param  {string} config.imageId
 * @return {string}
 */
export function single(config) {
  const { content, title, imageId } = config;

  const image = utils.createAbsoluteURL(`covers/${imageId}.jpg`);

  const header = utils.readFile(Paths.template.header);
  const footer = utils.readFile(Paths.template.footer);
  const html = utils.readFile(Paths.template.single);

  return html
    .replaceAll('%HEADER%', header)
    .replaceAll('%FOOTER%', footer)
    .replaceAll('%CONTENT%', content)
    .replaceAll('%TITLE%', title)
    .replaceAll('%IMAGE%', image);
}
