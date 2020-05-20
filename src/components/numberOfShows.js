import React from "react"
import { StaticQuery, graphql } from "gatsby"

const NumberOfShows = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          group(field: frontmatter___show) {
            edges {
              node {
                id
                frontmatter {
                  show
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
