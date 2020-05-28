import React from "react"
import { Link } from "gatsby"
import star from "../../content/assets/star.svg"

/**
 * @param  {Object} props
 */
function Item(props) {
  return (
    <article>
      <h3
        style={{
          marginTop: 0,
          marginBottom: '2rem'
        }}
      >
        <Link
          title={"Review: " + props.title}
          style={{
            display: 'block',
            boxShadow: `none`,
            marginBottom: '10px',
            marginRight: '15px',
          }}
          to={props.slug}>
          {props.title}
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
            >{props.date}</small>
            <span
              className="rating"
              style={{
                marginBottom: '0'
              }}
            >{stars(props.rating)}</span>
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
        title={item.node.frontmatter.title}
        slug={item.node.fields.slug}
        rating={item.node.frontmatter.rating}
        date={item.node.frontmatter.date} />
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