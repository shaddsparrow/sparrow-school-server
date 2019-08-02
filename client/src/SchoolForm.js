import React from "react";

function SchoolForm({
    regnumber, regid, form, namme, namee, resetFormState
}){
    return(
        <div className="ss-schoolform-row">
        <div className="ss-schoolform-col">
        <label htmlFor="Reg_id">reg_number</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regnumber"
        />
             </div>
        <label htmlFor="Form">Reg_id</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regid"
        />
             </div>
        <label htmlFor="reg_number">form</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="form"
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
                onClick = {resetFormState}             
            >
                Reset
            </button>
        
        </div>
        </div>
)}

export default SchoolForm;

