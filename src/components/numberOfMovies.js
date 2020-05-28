import React from "react"
import { StaticQuery, graphql } from "gatsby"

const NumberOfShows = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "movie"}}}) {
          group(field: frontmatter___name) {
            edges {
              node {
                id
                frontmatter {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let groups=JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark.group

      return (
        <div className="widgets-number">
          {groups.length}
        </div>
      )
    }}
  ></StaticQuery>
)

export default NumberOfShows
