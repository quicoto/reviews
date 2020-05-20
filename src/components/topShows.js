import React from "react"
import { StaticQuery, graphql } from "gatsby"

function ShowItem(props) {
  return (
    <li>
      <strong>{props.show}</strong> ({props.average})
    </li>
  );
}

function ShowsList(props) {
  const groups = props.groups;
  let topShows = []

  groups.forEach((group) => {
    const nodes = group.nodes;
    let show = {
      show: nodes[0].frontmatter.show,
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
      { topShows.map((show) =>
        <ShowItem key={show.show}
                  show={show.show}
                  average={show.average} />
      )}
    </ul>
  );
}

const TopShows = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          group(field: frontmatter___show) {
            nodes {
              frontmatter {
                rating
                show
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
