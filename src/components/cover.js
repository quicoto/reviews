import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Image(props) {
  if (props.path !== "") {
    return (
      <img
        className="cover"
        src={props.path}
        alt={props.name}
        title={props.name}
      />
    )
  }

  return ""
}

function Cover(props) {
  let imageSrc = ""
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/covers/" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)

  for (let i = 0, len = data.allFile.edges.length; i < len; i++) {
    const item = data.allFile.edges[i].node

    if (item.name === props.slug) {
      imageSrc = item.publicURL
    }
  }

  return <Image path={imageSrc} name={props.name} />
}

export default Cover
