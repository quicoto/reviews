// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

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

      <form class="builder">
        <div class="row">
          <label for="show" class="form-label">TV Shows</label>
          <select class="form-select" id="show">
            <option selected>Select TV Show</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="row">
          <label for="Season" class="form-label">Season</label>
          <input id="Season" type="number" name="season" onChange={ this.setState({season: e.target.value}) } value={ this.state.season } />
          { this.state.season }
        </div>
        <div class="row">
          <label for="Episode" class="form-label">Episode</label>
          <input id="Episode" type="number" name="episode" />
        </div>
        <div class="row">
          <label for="rating" class="form-label">Rating</label>
          <select class="form-select" id="rating">
            <option selected>Select episode rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label for="Comment" class="form-label">Comment</label>
          <textarea class="form-control" id="Comment" rows="3"></textarea>
        </div>
        <div>
          <label for="markdown" class="form-label">Markdown</label>
          <textarea class="form-control" id="markdown" rows="3"></textarea>
        </div>
      </form>

      <a href="https://github.com/quicoto/reviews/new/master/content/blog/tv-shows/?filename=tv-shows/test.md">Create file on Github</a>
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
