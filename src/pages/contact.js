import React from "react"

import Layout from "../components/layout"
import ContactContent from "../components/contactContent"
import SEO from "../components/seo"

import "../styles/main.scss"

const ContactPage = () => {
    return (
        <Layout>
            <SEO />
            <ContactContent />
        </Layout>
    )
}

export default ContactPage