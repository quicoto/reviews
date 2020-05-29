import React from "react"
import { Link } from "gatsby"
import star from "../../content/assets/star.svg"

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
          marginBottom: '2rem'
        }}
      >
        <Link
          title={"Review: " + title}
          style={{
            display: 'block',
            boxShadow: `none`,
            marginBottom: '10px',
            marginRight: '15px',
          }}
          to={slug}>
          {title}
        </Link>
        <span
          style={{
            alignItems: 'center',
            display: 'flex'
          }}>
            <small
            style={{
              display: 'block',
              fontSize: `60%`,
              marginRight: '15px'
            }}
            >{date}</small>
            <span
              className="rating"
              style={{
                marginBottom: '0'
              }}
            >{stars(rating)}</span>
        </span>
      </h3>
    </article>
  );
}

/**
 * @param  {object} props
 */
export function List(props) {
  return (
    <div>
      { props.edges.map(item =>
        <Item key={item.node.id}
        item={item} />
      )}
    </div>
  );
}

/**
 * @param  {number} rating
 */
export function stars(rating) {
  const stars = []
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={star} alt={`Star ${i+1}`} key={i}/>)
  }
  return stars
}