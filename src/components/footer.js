import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner-footer">
                <div className="copyright">Copyright © <Link to="https://github.com/Jon-C-McLean">Jon McLean</Link> 2020 - 2021 </div>
            </div>
        </footer>
    )
}

export default Footer