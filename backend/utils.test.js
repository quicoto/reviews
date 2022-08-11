import { sortEpisodes } from './utils.js';

describe('sortEpisodes', () => {
  it('should sort seasons and episodes', () => {
    const list = [
      { content: '', frontmatter: { season: '2', episode: '2' } },
      { content: '', frontmatter: { season: '2', episode: '1' } },
      { content: '', frontmatter: { season: '1', episode: '1' } },
      { content: '', frontmatter: { season: '1', episode: '3' } },
      { content: '', frontmatter: { season: '1', episode: '2' } },
    ];
    const expected = [
      { content: '', frontmatter: { season: '1', episode: '1' } },
      { content: '', frontmatter: { season: '1', episode: '2' } },
      { content: '', frontmatter: { season: '1', episode: '3' } },
      { content: '', frontmatter: { season: '2', episode: '1' } },
      { content: '', frontmatter: { season: '2', episode: '2' } },
    ];

    expect(sortEpisodes(list)).toEqual(expected);
  });
});
