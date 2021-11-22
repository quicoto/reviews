import React from "react"
import { Link } from "gatsby"
import Cover from "../components/cover"
import starFull from "../../content/assets/star.svg"
import starEmpty from "../../content/assets/star-empty.svg"
import starHalf from "../../content/assets/star-half.svg"
import slugify from '@sindresorhus/slugify'

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
  const name = props.item.node.frontmatter.name
  const title = props.item.node.frontmatter.title
  const slug = props.item.node.fields.slug
  const rating = props.item.node.frontmatter.rating
  const date = props.item.node.frontmatter.date

  return (
    <li>
      <h3 className="itemHeading">
        <Link title={"Review: " + title} className="itemLink" to={slug}>
          {props.cover && <Cover props slug={slugify(name)} name={name} />}
          <div>{title}</div>
        </Link>
        <span className="itemRatingWrapper">
          <small className="itemRatingDate">{date}</small>
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
    </li>
  )
}

/**
 * @param  {object} props
 */
export function List(props) {
  return (
    <ul className="list-no-style">
      {props.edges.map(item => (
        <Item key={item.node.id} item={item} cover={props.cover} />
      ))}
    </ul>
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
