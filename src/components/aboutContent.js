import React from "react"

import "../styles/main.scss"

const AboutContent = () => {
    return (
        <section className="banner">
            <div className="inner-banner">
                <div className="banner-title">I am</div>
                <div className="keypoint nofade">Jon McLean</div>
                <div className="banner-title">And I am a</div>
                <div className="keypoint somefade">Software Engineer</div>
                <div className="content">
                    I am currently a third year software engineering student doing a Bachelor of Engineering (Hons) majoring in Software at the 
                    University of Technology Sydney. I specialize in developing mobile applications, primarily for iOS, and low level system software. 
                    <br/>
                    <br/>
                    I work on my own projects in my freetime. Currently I am working on developing a political polling application based of the swiping idea in the
                    popular dating app Tinder. I am also currently working on a project called GraphBender that allows for improved graphing of manufacturing/quality
                    data outputted by the Brabender Extrusion software.
                </div>
            </div>
        </section>
    )
}

export default AboutContent