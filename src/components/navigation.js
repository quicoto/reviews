import React from "react"
import { Link } from "gatsby"

function Navigation() {
  return (
    <nav className="nav">
      <Link className="nav-link" activeClassName="nav-link--active" to={`/`}>
        Home
      </Link>
      <Link
        className="nav-link"
        activeClassName="nav-link--active"
        to={`/tv-shows`}
      >
        All TV Shows
      </Link>
      <Link
        className="nav-link"
        activeClassName="nav-link--active"
        to={`/movies`}
      >
        All Movies
      </Link>
    </nav>
  )
}
export default Navigation
