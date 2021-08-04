import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TotalTime = () => (
  <StaticQuery
    query={graphql`
      {
        movies: allMarkdownRemark(filter: { frontmatter: { type: { eq: "movie" } } }) {
          edges {
            node {
              id
            }
          }
        }
        series:   allMarkdownRemark(sort: {order: [ASC, ASC], fields: [frontmatter___season, frontmatter___episode]}, filter: {frontmatter: {type: {eq: "series"}}}) {
          group(field: frontmatter___name) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                time
                title
                name
                rating
                season
                episode
              }
              id
            }
            totalCount
          }
        }
      }
    `}
    render={data => {
      let movies = JSON.parse(JSON.stringify(data.movies, null, 4)).edges;
      let series = JSON.parse(JSON.stringify(data.series, null, 4)).group;
      let seriesMinutes = 0;

      series.forEach(show => {
        const found = show.nodes.find(i => i.frontmatter.time !== null)

        if (found) {
          seriesMinutes += found.frontmatter.time * show.totalCount
        }
      })

      const hours = Math.round(((movies.length * 120) / 60) + ((seriesMinutes) / 60));
      const days = Math.round(hours / 24);
      const months = Math.round(days / 30);
      const years = Math.round(months / 12);

      return <div className="widgets-number widgets-number--time">
          <p hidden={hours === 0}>{new Intl.NumberFormat().format(hours)} hours</p>
          <p hidden={days === 0}>{new Intl.NumberFormat().format(days)} days</p>
          <p hidden={months === 0}>{new Intl.NumberFormat().format(months)} month{months > 1 ? 's' : ''}</p>
          <p hidden={years === 0}>{new Intl.NumberFormat().format(years)} years</p>
        </div>
    }}
  ></StaticQuery>
)

export default TotalTime
