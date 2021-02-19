import React from "react"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => {
  return (
    <header>
      <h1>Rajesh Mule</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
