import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { stars, roundHalf } from "../utils/shared"
import slugify from "@sindresorhus/slugify"

function ShowItem(props) {
  const name = props.show

  return (
    <li>
      <h3
        style={{
          marginBottom: "2rem",
          marginTop: "0",
        }}
      >
        <Link
          title={`All reviews for: ${name}`}
          style={{
            boxShadow: `none`,
            marginBottom: "10px",
            marginRight: "15px",
          }}
          to={`/tv-shows#${slugify(name)}`}
        >
          <strong>{name}</strong>{" "}
          <span className="rating">{stars(props.average)}</span>
        </Link>
      </h3>
    </li>
  )
}

function ShowsList(props) {
  const groups = props.groups
  let topShows = []

  groups.forEach(group => {
    const nodes = group.nodes
    let show = {
      name: nodes[0].frontmatter.name,
      totalCount: group.totalCount,
    }
    let total = 0

    nodes.forEach(node => {
      total += node.frontmatter.rating
    })

    show.average = roundHalf(parseFloat((total / nodes.length).toFixed(2)))
    topShows.push(show)
  })

  // Discard shows with less than 6 reviews
  topShows = topShows.filter(show => show.totalCount > 6)

  // Order DESC (best average first and then if tie, by total count)
  topShows.sort(function (a, b) {
    let n = b.average - a.average
    if (n !== 0) {
      return n
    }

    return b.totalCount - a.totalCount
  })

  topShows = topShows.slice(0, 10)

  return (
    <ul className="list-no-style">
      {topShows.map((show, index) => (
        <ShowItem
          key={index.toString()}
          show={show.name}
          average={show.average}
        />
      ))}
    </ul>
  )
}

const TopShows = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "series" } } }) {
          group(field: frontmatter___name) {
            nodes {
              frontmatter {
                rating
                name
              }
            }
            totalCount
          }
        }
      }
    `}
    render={data => {
      let groups = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark
        .group

      return (
        <div className="topShows">
          <ShowsList groups={groups} />
        </div>
      )
    }}
  ></StaticQuery>
)

export default TopShows
