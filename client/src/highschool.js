import React from "react";


function Highschool ({highschooldisplay}){
const { namee, form, reg_id} = highschooldisplay;

return(
    <div>
        <h2>{namee}</h2>
        <p>{form}</p>
        <p>{reg_id}</p>
    </div>
);



}

export default Highschool;