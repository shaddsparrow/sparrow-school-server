import React from "react";


function SchoolTable(){
    return(
        <div className="ss-schooltable">
            <table>
            <thead>
                <tr>
                    <th>reg_id</th>
                    <th>form</th>
                    <th>reg_number</th>
                    <th>namme</th>
                    <th>namee</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <td>scce08948</td>
                 <td>two west</td>
                 <td>scce08948</td>
                 <td>masai man</td>
                 <td>Aliance</td>
                 <td>
                 <span className="ss-link"
                  >edit</span> 
                    
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    
                    <span className="ss-link"
                    >delete</span>
                 </td>
            </tbody>
            
            
        </table>

        </div>
        
        
    )

}
export default SchoolTable;