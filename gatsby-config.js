module.exports = {
  pathPrefix: "/reviews",
  siteMetadata: {
    title: `Ricard Torres Reviews`,
    author: {
      name: `Ricard Torres`,
      summary: `Senior Front-end Software Engineer from Barcelona, Haidong Gumdo Instructor (korean martial art of the sword), street photographer, travel lover, TV addict, Boston Red Sox fan, and privacy advocate.`,
    },
    description: `My TV Shows reviews`,
    siteUrl: `https://quicoto.github.io/reviews/`,
    social: {
      twitter: `ricard_dev`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '11',
        matomoUrl: 'https://analytics.quicoto.com',
        siteUrl: 'https://quicoto.github.io/reviews',
        matomoJsScript: 'matomo.js',
        matomoPhpScript: 'matomo.php',
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: `📺 Just watched: ${edge.node.frontmatter.title}\n\nRating: ${edge.node.frontmatter.ratingEmoji}\n\nReview 👉 ${site.siteMetadata.siteUrl + edge.node.fields.slug}`,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date,
                        ratingEmoji
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricard Torres Reviews`,
        short_name: `Reviews`,
        start_url: `/reviews/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon-512x512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
