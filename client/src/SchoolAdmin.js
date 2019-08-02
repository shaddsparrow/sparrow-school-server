import React from "react";
import axios from "axios";
import SchoolForm from "./SchoolForm";
import SchoolTable from "./SchoolTable";

class SchoolAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            regid: "",
            form: "",
            regnumber: "",
            namme: "",
            namee: "",
            editing: false,
            formSubmitting: false,
            validationErrors: {},
            formSuccess: false,
            formError: false,
            school: [],
            tableLoading: false,
            tableError: false,
            deleteSuccess: false

        }
        this.resetFormState = this.resetFormState.bind(this)
    }
      componentDidMount(){
          this.fetchschool();
      }
     fetchschool(){
        this.setState({
            tableLoading: true,
            tableError: false
        });
        axios.get("/api/schoolinfomation")
        .then(response=>{
            this.setState({
                school:response.data,
                tableLoading: false,
                tableError: false
            })
        })
        .catch(error=>{
            this.setState({
               tableError: true,
               tableLoading: false,
               school: []
            })
        })
      


     }
      resetFormState(){
          this.setState = {
              regnumber:"",
              regid: "",
              form:"",
              namme:"",
              namee:"",
              tableLoading: false,
              tableError: false
          }
      }

    render(){
        const{
            tableLoading,
            tableError,
            school,
            regnumber,
            regid,
            form,
            namme,
            namee
        } = this.state;
        return(
            <div>


                <SchoolForm
                    regnumber={regnumber}
                    regid={regid}
                    form={form}
                    namme={namme}
                    namee={namee}
                    resetFormState={this.resetFormState}
                />




                <SchoolTable
                  tableLoading={tableLoading}
                  tableError={tableError}
                  school={school}
                />


            </div>
            
        );
    }
}
export default SchoolAdmin;


