import {
  parseFrontMatter,
  createAbsoluteURL,
  sortEpisodes,
  sortchapters,
  sortByDate,
  roundHalf,
  formatDate,
  formatRSSDate,
  createURL,
  averageRating,
  sortByRatingAndEpisodes,
  sortByRatingAndChapters,
} from './utils.js';

describe('parseFrontMatter', () => {
  it('should parse valid frontmatter', () => {
    const content = `---
title: "Test Title"
date: "2023-01-01"
rating: 5
---

Some content here`;

    const result = parseFrontMatter(content);
    expect(result).toEqual({
      title: 'Test Title',
      date: '2023-01-01',
      rating: '5',
    });
  });

  it('should handle frontmatter without quotes', () => {
    const content = `---
title: Test Title
date: 2023-01-01
---`;

    const result = parseFrontMatter(content);
    expect(result).toEqual({
      title: 'Test Title',
      date: '2023-01-01',
    });
  });

  it('should handle empty values as null', () => {
    const content = '---\ntitle: "Test"\nepisode: \nseason: \n---';

    const result = parseFrontMatter(content);
    expect(result).toEqual({
      title: 'Test',
      episode: null,
      season: null,
    });
  });

  it('should return empty object if no frontmatter found', () => {
    const content = 'Just regular content without frontmatter';
    const result = parseFrontMatter(content);
    expect(result).toEqual({});
  });

  it('should handle colons in values', () => {
    const content = `---
title: "Time: 12:30 PM"
---`;

    const result = parseFrontMatter(content);
    expect(result).toEqual({
      title: 'Time: 12:30 PM',
    });
  });
});

describe('createAbsoluteURL', () => {
  it('should create URL without domain', () => {
    expect(createAbsoluteURL('movies/test')).toBe('/reviews/movies/test');
  });

  it('should create URL with domain', () => {
    expect(createAbsoluteURL('movies/test', true)).toBe('https://quicoto.github.io/reviews/movies/test');
  });
});

describe('sortEpisodes', () => {
  it('should sort seasons and episodes', () => {
    const list = [
      { frontmatter: { season: '2', episode: '2' } },
      { frontmatter: { season: '2', episode: '1' } },
      { frontmatter: { season: '1', episode: '1' } },
      { frontmatter: { season: '1', episode: '3' } },
      { frontmatter: { season: '1', episode: '2' } },
    ];
    const expected = [
      { frontmatter: { season: '1', episode: '1' } },
      { frontmatter: { season: '1', episode: '2' } },
      { frontmatter: { season: '1', episode: '3' } },
      { frontmatter: { season: '2', episode: '1' } },
      { frontmatter: { season: '2', episode: '2' } },
    ];

    expect(sortEpisodes(list)).toEqual(expected);
  });
});

describe('sortchapters', () => {
  it('should sort chapters by number', () => {
    const list = [
      { frontmatter: { chapter: '10' } },
      { frontmatter: { chapter: '2' } },
      { frontmatter: { chapter: '1' } },
      { frontmatter: { chapter: '5' } },
    ];
    const expected = [
      { frontmatter: { chapter: '1' } },
      { frontmatter: { chapter: '2' } },
      { frontmatter: { chapter: '5' } },
      { frontmatter: { chapter: '10' } },
    ];

    expect(sortchapters(list)).toEqual(expected);
  });
});

describe('sortByDate', () => {
  it('should sort items by date in descending order (newest first)', () => {
    const item1 = { frontmatter: { date: '2023-01-01' } };
    const item2 = { frontmatter: { date: '2023-12-31' } };

    // item2 (newer) should come before item1 (older), so return 1
    expect(sortByDate(item1, item2)).toBe(1);
    // item1 (older) should come after item2 (newer), so return -1
    expect(sortByDate(item2, item1)).toBe(-1);
    expect(sortByDate(item1, item1)).toBe(0);
  });
});

describe('roundHalf', () => {
  it('should round to nearest half', () => {
    expect(roundHalf(4.2)).toBe(4);
    expect(roundHalf(4.3)).toBe(4.5);
    expect(roundHalf(4.7)).toBe(4.5);
    expect(roundHalf(4.8)).toBe(5);
    expect(roundHalf(5)).toBe(5);
  });
});

describe('formatDate', () => {
  it('should format date to US locale', () => {
    const date = '2023-01-15';
    const result = formatDate(date);
    expect(result).toBe('January 15, 2023');
  });
});

describe('formatRSSDate', () => {
  it('should format date to UTC string', () => {
    const date = '2023-01-15T12:00:00Z';
    const result = formatRSSDate(date);
    expect(result).toContain('2023');
    expect(typeof result).toBe('string');
  });

  it('should use current date if no date provided', () => {
    const result = formatRSSDate();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('createURL', () => {
  it('should create movie URL without domain', () => {
    const itemData = {
      frontmatter: {
        type: 'movie',
        name: 'Test Movie',
      },
    };
    expect(createURL(itemData)).toBe('/reviews/movies/test-movie/');
  });

  it('should create movie URL with domain', () => {
    const itemData = {
      frontmatter: {
        type: 'movie',
        name: 'Test Movie',
      },
    };
    expect(createURL(itemData, true)).toBe('https://quicoto.github.io/reviews/movies/test-movie/');
  });

  it('should create series URL', () => {
    const itemData = {
      frontmatter: {
        type: 'series',
        name: 'Test Show',
        season: '1',
        episode: '5',
      },
    };
    expect(createURL(itemData)).toBe('/reviews/tv-shows/test-show/1x5');
  });

  it('should create manga URL', () => {
    const itemData = {
      frontmatter: {
        type: 'manga',
        name: 'Test Manga',
        chapter: '42',
      },
    };
    expect(createURL(itemData)).toBe('/reviews/manga/test-manga/42');
  });
});

describe('averageRating', () => {
  it('should calculate average rating and round to nearest half', () => {
    const episodes = [
      { frontmatter: { rating: '4' } },
      { frontmatter: { rating: '5' } },
      { frontmatter: { rating: '3' } },
    ];
    expect(averageRating(episodes)).toBe(4);
  });

  it('should handle single episode', () => {
    const episodes = [{ frontmatter: { rating: '4.5' } }];
    expect(averageRating(episodes)).toBe(4.5);
  });

  it('should round to nearest half', () => {
    const episodes = [
      { frontmatter: { rating: '4' } },
      { frontmatter: { rating: '5' } },
    ];
    expect(averageRating(episodes)).toBe(4.5);
  });
});

describe('sortByRatingAndEpisodes', () => {
  it('should sort by rating descending', () => {
    const show1 = { averageRating: 4, episodes: [1, 2, 3] };
    const show2 = { averageRating: 5, episodes: [1, 2, 3] };

    expect(sortByRatingAndEpisodes(show1, show2)).toBe(1);
    expect(sortByRatingAndEpisodes(show2, show1)).toBe(-1);
  });

  it('should sort by episode count when ratings are equal', () => {
    const show1 = { averageRating: 4, episodes: [1, 2] };
    const show2 = { averageRating: 4, episodes: [1, 2, 3, 4] };

    expect(sortByRatingAndEpisodes(show1, show2)).toBe(1);
    expect(sortByRatingAndEpisodes(show2, show1)).toBe(-1);
  });

  it('should return 0 for equal shows', () => {
    const show1 = { averageRating: 4, episodes: [1, 2, 3] };
    const show2 = { averageRating: 4, episodes: [1, 2, 3] };

    expect(sortByRatingAndEpisodes(show1, show2)).toBe(0);
  });
});

describe('sortByRatingAndChapters', () => {
  it('should sort by rating descending', () => {
    const manga1 = { averageRating: 4, chapters: [1, 2, 3] };
    const manga2 = { averageRating: 5, chapters: [1, 2, 3] };

    expect(sortByRatingAndChapters(manga1, manga2)).toBe(1);
    expect(sortByRatingAndChapters(manga2, manga1)).toBe(-1);
  });

  it('should sort by chapter count when ratings are equal', () => {
    const manga1 = { averageRating: 4, chapters: [1, 2] };
    const manga2 = { averageRating: 4, chapters: [1, 2, 3, 4] };

    expect(sortByRatingAndChapters(manga1, manga2)).toBe(1);
    expect(sortByRatingAndChapters(manga2, manga1)).toBe(-1);
  });

  it('should return 0 for equal manga', () => {
    const manga1 = { averageRating: 4, chapters: [1, 2, 3] };
    const manga2 = { averageRating: 4, chapters: [1, 2, 3] };

    expect(sortByRatingAndChapters(manga1, manga2)).toBe(0);
  });
});
