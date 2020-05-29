import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
const slugify = require('@sindresorhus/slugify');

function ShowItem(props) {
  const name = props.show

  return (
    <li>
       <Link
          title={`All reviews for: ${name}`}
          style={{
            boxShadow: `none`,
            marginBottom: '10px',
            marginRight: '15px',
          }}
          to={`tv-shows#${slugify(name)}`}>
          <strong>{name}</strong> ({props.average})
        </Link>
    </li>
  );
}

function ShowsList(props) {
  const groups = props.groups;
  let topShows = []

  groups.forEach((group) => {
    const nodes = group.nodes;
    let show = {
      name: nodes[0].frontmatter.name,
      totalCount: group.totalCount
    };
    let total = 0

    nodes.forEach((node) => {
      total += node.frontmatter.rating;
    });

    show.average = parseFloat((total / nodes.length).toFixed(2));
    topShows.push(show);
  })

  // Order DESC (best average first and then if tie, by total count)
  topShows.sort(function (a, b) {
    let n = b.average - a.average;
    if (n !== 0) {
        return n;
    }

    return b.totalCount - a.totalCount;
  });


  topShows = topShows.slice(0, 5);

  return (
    <ul>
      { topShows.map((show, index) =>
        <ShowItem key={index.toString()}
                  show={show.name}
                  average={show.average} />
      )}
    </ul>
  );
}

const TopShows = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "series"}}}) {
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
      let groups = JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark.group;

      return (
        <div>
          <ShowsList groups={groups} />
        </div>
      )
    }}
  ></StaticQuery>
)

export default TopShows
