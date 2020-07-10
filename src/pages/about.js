import React from "react"

import Layout from "../components/layout"
import AboutContent from "../components/aboutContent"
import SEO from "../components/seo"

import "../styles/main.scss"

const AboutPage = () => {
    return (
        <Layout>
            <SEO />
            <AboutContent />
        </Layout>
    )
}

export default AboutPage