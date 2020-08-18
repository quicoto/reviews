import React from "react"
import { StaticQuery, graphql } from "gatsby"

const TotalEpisodes = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "series" } } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => {
      let edges = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark
        .edges

      return <div className="widgets-number">{edges.length}</div>
    }}
  ></StaticQuery>
)

export default TotalEpisodes
