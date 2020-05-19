import React from "react"
import { Link } from "gatsby"

import logo from "../../content/assets/logo.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  let titleWrapper = (
    <div className="title-wrapper">
      {title}
    </div>
  )

  let image = (
    <img
      src={logo}
      title="Ricard Torres Reviews"
      alt="Logo"
      className="header-logo" />
  )


  if (location.pathname === rootPath) {
    header = (
      <h1 className="site-title">
        <Link
          activeClassName="site-title-link"
          to={`/`}
        >
          {image}
          {titleWrapper}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className="site-title">
        <Link
          className="site-title-link"
          to={`/`}
        >
          {image}
          {titleWrapper}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <div className="full-width">
        <header className="header">{header}</header>
      </div>
      <main className="main-content">{children}</main>
      <div className="full-width">
        <footer className="footer">
          <a href="https://github.com/quicoto/reviews" title="Fork this Github repo">Fork me</a>
          <a href="https://ricard.dev" title="Ricard Torres Code">Code</a>
          <a href="https://ricard.blog" title="Ricard Torres Blog">Blog</a>
          <a href="https://ricard.blog/podcast" title="Ricard Torres Radio">Podcast</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
