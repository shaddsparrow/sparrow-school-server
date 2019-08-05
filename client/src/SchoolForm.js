import React from "react";

function SchoolForm({
    regnumber, regid, form, namme, namee, resetFormState,handleOnChange
}){
    return(
        <div className="ss-schoolform-row">
        <div className="ss-schoolform-col">
        <label htmlFor="Reg_number">reg_number</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regnumber"
                  value= {regnumber} 
                  onChange = {handleOnChange}
                  onClick={resetFormState}
                  
        />
             </div>
        <label htmlFor="reg_id">Reg_id</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="regid"
                  value= {regid} 
                  onChange = {handleOnChange}
        />
             </div>
        <label htmlFor="form">form</label><br></br>
        <div className="form-input"><input
                  type="text"
                  name="form"
                  value=  {form}
        />
             </div>
        <label htmlFor="namme">namme</label>
        <div className="form-input"><input
                  type="text"
                  name="namme"
                  value=  {namme} 
                  onChange = {handleOnChange}
        />
        </div>
        <label htmlFor="namee">namee</label>
        <div className="form-input"><input
                  type="text"
                  name="namee"
                  value={namee} 
                  onChange = {handleOnChange}
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

