import React from "react";


function SchoolTable({
    school, tableloading, tableError, editschools
}){
   
    return(
        <div className="ss-schooltable">
            <table>
            <thead>
                <tr>
                    <th>reg_number</th>
                    <th>reg_id</th>
                    <th>form</th>
                    <th>namme</th>
                    <th>namee</th>
                    <th>ACTION</th>
                </tr>
            </thead>

            <tbody>
            {school.map((schoolinfo, index)=>{
                 const{reg_number,namme,reg_id,form,namee}=schoolinfo;
                 return(
                   <tr key ={reg_number}>
                         <td>{reg_number}</td>
                         <td>{reg_id}</td>
                         <td>{form}</td>
                         <td>{namme}</td>
                         <td>{namee}</td>
                         <td>
                             <span id = "edit" onClick = {editschools(schoolinfo)}>edit</span>

                             &nbsp;&nbsp; | &nbsp;&nbsp;

                             <span id = "delete">delete</span>
                         </td>
                         
                   </tr>
                 )
             })}

            </tbody>
            
            
        </table>

        </div>
        
        
    )

}
export default SchoolTable;