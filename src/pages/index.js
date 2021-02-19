import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/index.scss"

export default function Home() {
  return (
    <Layout>
      <div>Hello world!</div>
      <p>
        {" "}
        Need a developer <Link to="/contact">contact me</Link>{" "}
      </p>
    </Layout>
  )
}
