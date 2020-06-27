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
                        <Link to="/projects"><span className="numbering">02.</span>Projects</Link>
                    </nav>
                </div>
            </div> 
        </div>
    )
}

export default Header