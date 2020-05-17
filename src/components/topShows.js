import React from "react"
import { StaticQuery, graphql } from "gatsby"

function ShowItem(props) {
  return <li>{props.value}</li>;
}

function ShowsList(props) {
  const groups = props.groups;

  // <ShowItem key={group.edges[0].node.id}
  //                 value={group.edges[0].node.frontmatter.show} />

  return (
    <ul>
      {/* {shows.map((show) =>
        <ShowItem key={number.toString()}
                  value={number} />
      )} */}
      {
        groups.forEach(group => {
          return (
            <div>
              hey
            </div>
          )
        })
      }
    </ul>
  );
}

const TopShows = () => (
  <StaticQuery
    query={graphql`
      {
        site(siteMetadata: {title: {}}) {
          id
        }
        allMarkdownRemark {
          group(field: frontmatter___show) {
            edges {
              node {
                id
                frontmatter {
                  show
                  rating
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      let groups=JSON.parse(JSON.stringify(data, null, 4)).allMarkdownRemark.group

      return (
        <div>
          <p><em>Work in progress...</em></p>
          <ShowsList groups={groups} />
        </div>
      )
    }}
  ></StaticQuery>
)

// const TopShows = ({ data }) => {
//   const { site } = useStaticQuery(
//     graphql`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               id
//             }
//           }
//           group(field: frontmatter___show) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   show
//                   rating
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   return (
//     <div>
//       <p>These are the top shows:</p>
//       <pre>{data}</pre>
//     </div>
//   )
// }

export default TopShows
