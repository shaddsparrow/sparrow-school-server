import React from "react";
import {Link} from "@reach/router";

function NavBar() {
    return (
        <div className="ss-container">
            <nav className="ss-navb">
                <span className="ss-title">
                    SPARROWSCHOOLS
                </span>

                <span className="ss-banner-text">
                    An investment in knowledge pays the best.
                    </span>
            </nav>

            <nav className="ss-2header">

                <span>
                    <Link to="/">parent</Link>
                    <Link to="/school">school</Link>
                    <Link to="/student">Admin</Link>
                </span>

            </nav>

        </div>




    );
}

export default NavBar;