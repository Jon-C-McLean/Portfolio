import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const ExperienceContent = () => {
    return (
        <section className="list-content">
            <div className="inner-list">
                <div className="title"><span className="numbering">02.</span>Experience</div>
                <div className="intro">
                    I have worked with several companies as an iOS developer and consultant. Most recently I have worked with CardCastle and Origma in Canberra as a
                    Senior iOS developer and iOS/Mobile developer and consultant, respectively. 
                </div>

                <div className="list">
                    <div className="content">
                        <ul>
                            <li>Hello World</li>
                            <li>Hello World 2</li>
                        </ul>
                    </div>
                    <div className="detail-panel">Hello World</div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceContent