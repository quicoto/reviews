import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cover from "../components/cover"
import { rhythm, scale } from "../utils/typography"
import { stars } from "../utils/shared"
const slugify = require('@sindresorhus/slugify');

function MoreLink(props) {
  const post = props.post

  if (post.frontmatter.type === 'series') {
    return (
      <p>
        <Link
          title={`All reviews for: ${post.frontmatter.name}`}
          style={{
            boxShadow: `none`,
            marginBottom: '10px',
            marginRight: '15px',
          }}
          to={`/tv-shows#${slugify(post.frontmatter.name)}`}>
          More reviews for <em>{post.frontmatter.name}</em>
        </Link>
      </p>
    )
  }

  return null
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="tvShow">
        <header>
          <Cover slug={slugify(post.frontmatter.name)} name={post.frontmatter.name}/>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div className="rating">
            {stars(post.frontmatter.rating)}
          </div>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <MoreLink post={post}/>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio short={true}/>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        title
        date(formatString: "MMMM DD, YYYY")
        rating
        type
      }
    }
  }
`
