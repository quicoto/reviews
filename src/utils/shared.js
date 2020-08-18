import React from "react"
import { Link } from "gatsby"
import starFull from "../../content/assets/star.svg"
import starEmpty from "../../content/assets/star-empty.svg"
import starHalf from "../../content/assets/star-half.svg"

/**
 * @param  {number} number
 * @returns {number}
 */
export function roundHalf(number) {
  return Math.round(number * 2) / 2
}

/**
 * @param  {Object} props
 */
export function Item(props) {
  const title = props.item.node.frontmatter.title
  const slug = props.item.node.fields.slug
  const rating = props.item.node.frontmatter.rating
  const date = props.item.node.frontmatter.date

  return (
    <article>
      <h3
        style={{
          marginTop: 0,
          marginBottom: "2rem",
        }}
      >
        <Link
          title={"Review: " + title}
          style={{
            display: "block",
            boxShadow: `none`,
            marginBottom: "10px",
            marginRight: "15px",
          }}
          to={slug}
        >
          {title}
        </Link>
        <span
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <small
            style={{
              display: "block",
              fontSize: `60%`,
              marginRight: "15px",
            }}
          >
            {date}
          </small>
          <span
            className="rating"
            style={{
              marginBottom: "0",
            }}
          >
            {stars(rating)}
          </span>
        </span>
      </h3>
    </article>
  )
}

/**
 * @param  {object} props
 */
export function List(props) {
  return (
    <div>
      {props.edges.map(item => (
        <Item key={item.node.id} item={item} />
      ))}
    </div>
  )
}

/**
 * @param  {number} rating
 */
export function stars(rating) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    let src = starFull

    if (i > rating) {
      src = starEmpty

      if ((rating - i) % 1 !== 0) {
        src = starHalf
        rating = rating - 0.5
      } else {
        rating--
      }
    }

    stars.push(<img src={src} alt={`Star ${i + 1}`} key={i} />)
  }

  return stars
}
