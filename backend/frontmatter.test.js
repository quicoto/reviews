import { splitMeta } from './frontmatter';

describe('frontmatter', () => {
  it('No value', () => {
    const meta = 'season:';

    expect(splitMeta(meta)).toEqual(['season:', '']);
  });

  it('One colon', () => {
    const meta = 'title: "My Title"';

    expect(splitMeta(meta)).toEqual(['title', '"My Title"']);
  });

  it('Two colon', () => {
    const meta = 'title: "My: Title"';

    expect(splitMeta(meta)).toEqual(['title', '"My: Title"']);
  });
});
