import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import AboutContent from "../components/aboutContent"

const IndexPage = () => (
  <div>
    <Layout>
      <Banner />
      <AboutContent id="about"/>
    </Layout>
  </div>
)

export default IndexPage
