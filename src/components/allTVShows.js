import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
const slugify = require('@sindresorhus/slugify');

function Item(props) {
  const name = props.nodes[0].frontmatter.name

  return (
    <article>
      <h3
        id={slugify(name)}
        style={{
          marginTop: 0,
          marginBottom: '2rem'
        }}
      >
        <span
          style={{
            display: 'flex',
            marginBottom: '10px',
          }}>
          <Link
            title={`All reviews for: ${name}`}
            style={{
              boxShadow: `none`,
              marginBottom: '10px',
              marginRight: '15px',
            }}
            to={`tv-shows#${slugify(name)}`}>
            #
          </Link>
          <span>{name}</span>
        </span>
        <div
          style={{
            marginLeft: '33px'
          }}>
          { props.nodes.map((item, index) =>
           <span key={index.toString()}>
            <Link
              title={`Review: ${item.frontmatter.title}`}
              style={{
                display: 'inline-block',
                boxShadow: `none`,
                marginBottom: '10px',
                marginRight: '15px',
              }}
              to={item.fields.slug}>
                {item.frontmatter.season}x{item.frontmatter.episode}
            </Link>
           </span>
          )}
        </div>
      </h3>
    </article>
  );
}

const AllTVShows = (props) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(sort: {order: [ASC, ASC], fields: [frontmatter___season, frontmatter___episode]}, filter: {frontmatter: {type: {eq: "series"}}}) {
          group(field: frontmatter___name) {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                name
                rating
                season
                episode
              }
              id
            }
            totalCount
          }
        }
      }
    `}
    render={data => {
      let nodes = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark.group;

      return (
        <div>
         { nodes.map((item, index) =>
           <Item key={index.toString()}
           nodes={item.nodes} />
         )}
       </div>
      )
    }}
  ></StaticQuery>
)

export default AllTVShows