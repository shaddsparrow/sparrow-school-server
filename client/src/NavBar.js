import React from "react";
import {Link} from "@reach/router";
import sparrow from "./sparrow.jpg"

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
            
           <div className="ss-image">
           <span id="light">sparrow</span>
           <img src={sparrow} alt="sparrow" width="100" height="100" border="0"/>
           <span id="light">school</span>
           </div>
            


            <nav className="ss-2header">

                <span>
                    <Link to="/">parent</Link>
                    <Link to="/school">school</Link>
                    <Link to="/admin">Admin</Link>
                </span>

            </nav>

        </div>




    );
}

export default NavBar;