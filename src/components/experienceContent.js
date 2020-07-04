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
                            <li>CardCastle</li>
                            <li>Origma</li>
                            <li>Freelancing</li>
                        </ul>
                    </div>
                    <div className="detail-panel">
                        <div>
                            <div className="detail-title">Developer <span className="company"><Link to="https://cardcastle.co">@ CardCastle</Link></span></div>
                            <div className="detail-date">April 2019<span className="hyphon">-</span>Feb 2020</div>
                            <ul>
                                <li>Developed major and complex features for iOS application according to given specifications</li>
                                <li>Reviewed other contributors' additions to the codebase, their merge requests, and provided feedback</li>
                                <li>Maintained a combined Objective-C/Swift codebase for the iOS application</li>
                                <li>Developed unit testing automation systems</li>
                            </ul>
                        </div>
                        <div hidden="true;">
                            <div className="detail-title">Developer/Consultant <span className="company"><Link to="https://origma.com.au">@ Origma</Link></span></div>
                            <div className="detail-date">Nov 2018<span className="hyphon">-</span>Feb 2020</div>
                            <ul>
                                <li>Developed major and complex features for iOS application according to given specifications</li>
                                <li>Provided consulting on all mobile development projects</li>
                                <li>Maintained all iOS codebases, repositories, and projects</li>
                                <li>Maintained testing systems for iOS projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceContent