// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import TotalEpisodes from "../components/totalEpisodes"
import TopShows from "../components/topShows"
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
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          rating: number
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

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
      </div>
      <h2>Top 5 shows</h2>
      <TopShows />
      <h2>Latest reviews</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginTop: 0,
                }}
              >
                <Link
                  title={"Review: " + title}
                  style={{
                    boxShadow: `none`,
                    marginRight: '15px'
                  }}
                  to={node.fields.slug}>
                  {title}
                </Link>
                <small
                  style={{
                    display: 'inline-block',
                    fontSize: `60%`,
                  }}
                  >{node.frontmatter.date}</small>
              </h3>
            </header>
          </article>
        )
      })}
      <p>
        <Link style={{ boxShadow: `none` }} to="all">
          All reviews &#10230;
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            rating
          }
        }
      }
    }
  }
`
