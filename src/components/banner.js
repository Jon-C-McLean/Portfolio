import React from "react"

import "../styles/main.scss"

const Banner = () => {

    return (
        <section className="banner">
            <div className="inner-banner">
                <div className="banner-title">
                    Hi my name is
                </div>
                <div className="keypoint nofade">Jon McLean</div>
                <div className="keypoint somefade">I build cool things</div>
                <div className="content fade">
                    I am software engineering student based in Sydney Australia.
                    I specialize in designing and building mobile applications and backends.
                </div> 
            </div>
        </section>
    )

}

export default Banner