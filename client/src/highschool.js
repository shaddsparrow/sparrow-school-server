import React from "react";  


function Highschool({ highschooldisplay }) {
    const { id, namee, form, reg_id } = highschooldisplay;

    return (
        <span>
        <div className = "ss-body">
            <p>{id}</p>
            <p>{namee}</p>
            <p>{form}</p>
            <p>{reg_id}</p>
        </div>
        </span>
    );
}

export default Highschool;