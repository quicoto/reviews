import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/navigation"
import logo from "../../content/assets/logo.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  let titleWrapper = <div className="title-wrapper">{title}</div>

  let image = (
    <img
      src={logo}
      title="Ricard Torres Reviews"
      alt="Logo"
      className="header-logo"
    />
  )

  if (location.pathname === rootPath) {
    header = (
      <h1 className="site-title">
        <Link activeClassName="site-title-link" to={`/`}>
          {image}
          {titleWrapper}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className="site-title">
        <Link className="site-title-link" to={`/`}>
          {image}
          {titleWrapper}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <div className="full-width">
        <header className="header">
          {header}
          <Navigation />
        </header>
      </div>
      <main className="main-content">{children}</main>
      <div className="full-width" style={{ marginBottom: 0 }}>
        <footer className="footer">
          <nav className="nav">
            <a
              className="nav-link"
              href="https://github.com/quicoto/reviews"
              title="Fork this Github repo"
            >
              Github
            </a>
            <a
              className="nav-link"
              href="https://ricard.dev"
              title="Ricard Torres Code"
            >
              Code
            </a>
            <a
              className="nav-link"
              href="https://ricard.blog"
              title="Ricard Torres Blog"
            >
              Blog
            </a>
            <a
              className="nav-link"
              href="https://ricard.blog/podcast"
              title="Ricard Torres Radio"
            >
              Podcast
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default Layout
