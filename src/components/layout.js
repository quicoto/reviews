import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const styles = {
    fullWidth: {
      background: '#74b9ff',
      color: 'white'
    },
    commonHeaderFooter: {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: '1rem',
    }
  }


  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: 0,
          marginTop: 0,
          fontSize: '2rem'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginBottom: 0,
          marginTop: 0,
          fontSize: '2rem'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <div style={styles.fullWidth}>
        <header style={styles.commonHeaderFooter}>{header}</header>
      </div>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >{children}</main>
      <div style={styles.fullWidth}>
        <footer
          style={styles.commonHeaderFooter}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
