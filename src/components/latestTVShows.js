import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { List } from "../utils/shared"

const LatestMovies = props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
          filter: { frontmatter: { type: { eq: "series" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                rating
              }
              id
            }
          }
        }
      }
    `}
    render={data => {
      let edges = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark
        .edges

      return (
        <div>
          <List edges={edges} />
        </div>
      )
    }}
  ></StaticQuery>
)

export default LatestMovies
