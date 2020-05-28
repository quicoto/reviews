// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import AllTVShows from "../components/allTVShows"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const AllShows = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const title = "All TV Shows Reviews"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description="All my TV Shows reviews including date, rating and some thoughts..." />
      <h1 style={{ marginTop: `0` }}>{title}</h1>

      <AllTVShows />

      <p>
        <Link style={{ boxShadow: `none` }} to="/">
          &#10229; Back home
        </Link>
      </p>
      <div style={{ paddingTop: `2rem` }}>
        <Bio />
      </div>
    </Layout>
  )
}

export default AllShows

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
