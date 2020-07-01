import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const AboutContent = () => {
    return (
        <section className="pageContent">
            <div className="inner-content">
                <div className="title"><span className="numbering">01.</span>About</div>
                <div className="content">
                    My name is Jon McLean and I am currently a second year software engineering student doing a Bachelor of Engineering (Hons) majoring in Software at the 
                    University of Technology Sydney. I specialize in developing mobile applications, primarily for iOS, and their respective backend APIs. 

                </div>
            </div>
        </section>
    )
}

export default AboutContent