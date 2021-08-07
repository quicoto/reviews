/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div className="bio">
      <h3 className="bioHeading">{author.name}</h3>
      <p>{author.summary}</p>
    </div>
  )
}

Bio.defaultProps = {
  short: false,
}

Bio.propTypes = {
  short: PropTypes.bool,
}

export default Bio
