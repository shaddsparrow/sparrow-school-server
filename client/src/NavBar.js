import React from "react";

function NavBar() {
    return (
        <div className="ss-container">
            <nav className="ss-header">
                <span className="ss-title">
                    SPARROWSCHOOLS
                </span>

                <span className="ss-banner-text">An investment in knowledge pays the best.</span>
            </nav>

            <nav className="ss-2header">

                <span>
                    <a href="/">parent</a>
                    <a href="/school">school</a>
                    <a href="/student">student</a>
                </span>

            </nav>

        </div>




    );
}

export default NavBar;