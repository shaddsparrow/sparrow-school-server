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
                </tr>
            </thead>
            <tbody>
                <td>scce08948</td>
                 <td>two west</td>
                 <td>scce08948</td>
                 <td>masai man</td>
                 <td>Aliance</td>
            </tbody>
            <body>
                <td>
                    <span>edit</span> 
                    
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    
                    <span>delete</span>
                    </td>
            </body>
            
        </table>

        </div>
        
        
    )

}
export default SchoolTable;