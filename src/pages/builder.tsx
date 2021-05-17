// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import FileBuilder from "../components/fileBuilder"
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
  const title = "Builder"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description="" />

      <h1 style={{ marginTop: `0` }}>{title}</h1>

      <FileBuilder />
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
