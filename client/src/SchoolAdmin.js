import React from "react";
import axios from "axios";
import SchoolForm from "./SchoolForm";
import SchoolTable from "./SchoolTable";

class SchoolAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regnumber: "",
            regid: "",
            form: "",
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
        this.handleOnChange = this.handleOnChange.bind(this)
        this.editschools = this.editschools.bind(this)

    }
    componentDidMount() {
        this.fetchschool();
    }
    fetchschool() {
        this.setState({
            tableLoading: true,
            tableError: false
        });
        axios.get("/api/schoolinfomation")
            .then(response => {
                this.setState({
                    school: response.data,
                    tableLoading: false,
                    tableError: false
                })
            })
            .catch(error => {
                this.setState({
                    tableError: true,
                    tableLoading: false,
                    school: []
                })
            })



    }
    resetFormState() {
        this.setState = {
            regnumber: "",
            regid: "",
            form: "",
            namme: "",
            namee: "",
            tableLoading: false,
            tableError: false
        }
    }








    handleOnChange(e) {
        e.preventDefault();
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
        
    }

    editschools(schoolinfo){
          const {
            reg_number,reg_id,form,namme,namee 
          }= schoolinfo;
          return ()=>{
            this.setState({
                regnumber: reg_number,
                regid: reg_id,
                form: form,
                namme: namme,
                namee: namee
            })}
          }
    

    render() {
        const {
            tableLoading,
            tableError,
            school,
            regnumber,
            regid,
            form,
            namme,
            namee
        } = this.state;
        return (
            <div>


                <SchoolForm
                    regnumber={regnumber}
                    regid={regid}
                    form={form}
                    namme={namme}
                    namee={namee}
                    resetFormState={this.resetFormState}
                    handle={this.handleNameChange}
                    handleOnChange={this.handleOnChange}
                />




                <SchoolTable
                    tableLoading={tableLoading}
                    tableError={tableError}
                    school={school}
                    editschools = {this.editschools}
                />


            </div>

        );
    }

}
export default SchoolAdmin;


