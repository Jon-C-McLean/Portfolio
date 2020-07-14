import React from "react"

const Error = (error) => {
    return (
        <section className="error">
            <div className="error-title">
                Error 404
            </div>
            <div className="keypoint">
                Page Not Found
            </div>
            <div className="content">
                Oh no! This page doesn't appear to exist.
            </div>
        </section>
    )
}

export default Error