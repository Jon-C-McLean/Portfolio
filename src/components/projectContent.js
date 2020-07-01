import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Project = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "ehealth-home.png"}) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <>
            <section className="pageContent">
                <div className="inner-content">
                    <div className="title"><span className="numbering">03.</span>Things I have built</div>

                    <div className="project-container">
                        <div className="project">
                            <div className="project-content">
                                <h4 className="project-title">EHealth</h4>
                            </div>
                            <div className="image-container">
                                <Link to="https://github.com/SES1-TM8/">
                                    <Img className="project-image-ios" fluid={data.placeholderImage.childImageSharp.fluid} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Project
