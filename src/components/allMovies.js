import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { List } from "../utils/shared"

const AllMovies = (props) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___title]}, filter: {frontmatter: {type: {eq: "movie"}}}) {
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
      let edges = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark.edges;

      return (
        <div>
          <List edges={edges} />
        </div>
      )
    }}
  ></StaticQuery>
)

export default AllMovies