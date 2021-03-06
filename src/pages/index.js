import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from main page</h1>

    <p>
      <Link to="/contact/">Go to contact</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
