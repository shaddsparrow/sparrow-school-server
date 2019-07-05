import React from "react";

import Highschool from "./Highschool";

function Highschoollistings({highschooldisplay}){
    return(
        <div className="ss-container">
            <div className="ss-highschool-listings">
                {
                    highschooldisplay.map(m => (
                        <Highschool key={m.id} highschooldisplay={m} />
                    ))
                }
            </div>
        </div>
    );

}

export default Highschoollistings;