import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <h1>Hi I'm Name</h1>
    <p>Welcome to my portfolio.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/cv/">Go to CV</Link>
  </Layout>
)

export default IndexPage
