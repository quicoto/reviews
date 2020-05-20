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

const All = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Reviews" description="All my TV Shows reviews" />
      <h1 style={{ marginTop: `0` }}>All reviews</h1>
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
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
                <small
                  style={{
                    fontSize: `60%`,
                    marginLeft: '15px'
                  }}
                  >{node.frontmatter.date}</small>
              </h3>
            </header>
          </article>
        )
      })}
      <p>
        <Link style={{ boxShadow: `none` }} to="/">
          &#10229; Back to the home
        </Link>
      </p>
      <div style={{ paddingTop: `2rem` }}>
        <Bio />
      </div>
    </Layout>
  )
}

export default All

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___title]}) {
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
