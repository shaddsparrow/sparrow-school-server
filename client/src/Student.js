import React from "react";  


function Student({ studentdisplay }) {
    const {  reg_number, namme,  } = studentdisplay;

    return (
        <span>
        <div className = "ss-body">
            <p>{reg_number}</p>
            <p>{namme}</p> 
        </div>
        </span>
        
    );
}

export default Student;