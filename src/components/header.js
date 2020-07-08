import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="inner-header">
                <div className="logo">
                    <Link to="/">MCLEAN</Link>
                </div>
                <div className="links">
                    <nav>
                        <Link to="/about"><span className="numbering">01.</span>About</Link>
                        <Link to="/experience"><span className="numbering">02.</span>Experience</Link>
                        <Link to="https://github.com/Jon-C-McLean"><span className="numbering">03.</span>Projects</Link>
                        <Link to="/contact"><span className="numbering">04.</span>Contact</Link>
                    </nav>
                </div>
            </div> 
        </div>
    )
}

export default Header