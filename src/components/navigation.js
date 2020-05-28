import React from "react"
import { Link } from "gatsby"

function Navigation() {
  return (
    <nav class="nav">
      <Link
        className="nav-link"
        activeClassName="nav-link--active"
        to={`/`}
        >
          Home
        </Link>
      <Link
        className="nav-link"
        activeClassName="nav-link--active"
        to={`all-shows`}
        >
          All TV Shows
        </Link>
      <Link
        className="nav-link"
        activeClassName="nav-link--active"
        to={`all-movies`}
        >
          All Movies
        </Link>
    </nav>
  )
}
export default Navigation

