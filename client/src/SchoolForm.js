import React from "react";

function SchoolForm(){
    return(
        <div className="ss-schoolform-row">
        <div className="ss-schoolform-col">
        <label htmlFor="Reg_id">Reg_id</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regId"
        />
             </div>
        <label htmlFor="Form">form</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="form"
        />
             </div>
        <label htmlFor="reg_number">reg_number</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regNumber"
        />
             </div>
        <label htmlFor="namme">namme</label>
        <div className="form-input"><input
                  type="text"
                  name="namme"
        />
        </div>
        <label htmlFor="namee">namee</label>
        <div className="form-input"><input
                  type="text"
                  name="namee"
        />
             </div>
             <button
                className="form-submit"
                type="submit"
                            >
                Submit
            </button>
            <button
                className="form-reset"
                type="reset"
                                
            >
                Reset
            </button>
        
        </div>
        </div>
)}

export default SchoolForm;

