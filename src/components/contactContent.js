import React from "react"

const ContactContent = () => {
    return (
        <section className="banner">
            <div className="inner-banner">
                <div className="banner-title">What do to next</div>
                <div className="keypoint nofade">Get in contact</div>
                <div className="content fade">
                    I am always looking for new and exciting opportunities to explore. My inbox is always open to whoever would like to contact me!
                    I'll always try my best to get back to you quickly.

                </div>

                <div className="button-container">
                    <div className="button">
                        <a href="mailto:jon@mclean.one"><p>Contact Me</p></a>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactContent