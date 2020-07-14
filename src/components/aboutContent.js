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
                    I am currently a second year software engineering student doing a Bachelor of Engineering (Hons) majoring in Software at the 
                    University of Technology Sydney. I specialize in developing mobile applications, primarily for iOS, and their respective backend APIs. 
                    <br/>
                    <br/>
                    I work on my own projects in my freetime. Currently I am working on developing a polical polling application based of the swiping idea in the
                    popular dating app Tinder.
                </div>
            </div>
        </section>
    )
}

export default AboutContent