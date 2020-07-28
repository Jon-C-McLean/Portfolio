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
                    <div className="list-element">
                        <div className="experienceName">CathRx</div>
                        <div className="experienceContent">
                            <div className="detail-title">Software Engineering Intern <span className="company"><Link to="https://cathrx.com">@ CathRx</Link></span></div>
                            <div className="detail-date">July 2020<span className="hyphon">-</span>Current</div>
                            <ul>
                                <li>Designed/modelled application architecture and database</li>
                                <li>Developed Cable Manufacturing Database and Software</li>
                                <li>Developed custom search query language specifically for the manufacturing software</li>
                            </ul>
                        </div>
                    </div>
                    <div className="list-element">
                        <div className="experienceName">Freelancing</div>
                        <div className="experienceContent">
                            <div className="detail-title">Freelancer <span className="company"><Link to="https://upwork.com">@ Upwork</Link></span></div>
                            <div className="detail-date">Feb 2020<span className="hyphon">-</span>July 2020</div>
                            <ul>
                                <li>Worked for many international clients on a variety of projects sizes</li>
                                <li>Developed and maintained relationships with clients</li>
                                <li>Developed iOS, web, and desktop applications under extreme time restrictions</li> 
                            </ul>
                        </div>
                    </div>
                    <div className="list-element">
                        <div className="experienceName">CardCastle</div>
                        <div className="experienceContent">
                            <div className="detail-title">Developer <span className="company"><Link to="https://cardcastle.co">@ CardCastle</Link></span></div>
                            <div className="detail-date">April 2019<span className="hyphon">-</span>Feb 2020</div>
                            <ul>
                                <li>Developed major and complex features for iOS application according to given specifications</li>
                                <li>Reviewed other contributors' additions to the codebase, their merge requests, and provided feedback</li>
                                <li>Maintained a combined Objective-C/Swift codebase for the iOS application</li>
                                <li>Developed unit testing automation systems</li>
                            </ul>
                        </div>
                    </div>

                    <div className="list-element">
                        <div className="experienceName">Origma</div>
                        <div className="experienceContent">
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