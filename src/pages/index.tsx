// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import TotalMovies from "../components/totalMovies"
import TotalEpisodes from "../components/totalEpisodes"
import TopShows from "../components/topShows"
import LatestMovies from "../components/latestMovies"
import LatestTVShows from "../components/latestTVShows"
import NumberOfShows from "../components/numberOfShows"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" description="My TV Shows reviews" />
      <Bio />

      <div className="widgets">
        <div className="widgets-column">
          <h2>Unique shows</h2>
          <NumberOfShows />
        </div>
        <div className="widgets-column">
          <h2>Total episodes</h2>
          <TotalEpisodes />
        </div>
        <div className="widgets-column">
          <h2>Total movies</h2>
          <TotalMovies />
        </div>
      </div>

      <hr/>

      <h2 style={{ marginTop: '0' }}>Top 5 shows</h2>
      <TopShows />

      <hr/>

      <h2 style={{ marginTop: '0' }}>Latest TV Show reviews</h2>
      <LatestTVShows />
      <p>
        <Link style={{ boxShadow: `none` }} to="all-shows">
          All TV Show Reviews &#10230;
        </Link>
      </p>

      <hr/>

      <h2 style={{ marginTop: '0' }}>Latest Movie reviews</h2>
      <LatestMovies />
      <p>
        <Link style={{ boxShadow: `none` }} to="all-movies">
          All Movie Reviews &#10230;
        </Link>
      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
