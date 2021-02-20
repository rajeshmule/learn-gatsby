import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
