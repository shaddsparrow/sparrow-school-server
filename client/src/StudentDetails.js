import React from "react";
import {Component} from "react";
import Student from "./Student";
import Axios from "axios";

class StudentDetails extends Component{

    constructor(props){
        super(props);
        this.state={
            studentdisplay:[],
            loading:false,
            error:false
        }
    }

    componentDidMount(){
        this.fetchstudentdetails();
    }

    fetchstudentdetails(){
        this.setState({loading:true,error:false});

        Axios.get("/api/student")
        .then(response=>{
            this.setState({
                studentdisplay:response.data,
                loading:false,
                error:false
            })
        }).catch(error=>{
            this.setState({
                studentdisplay:[],
                loading:false,
                error:true
            })
        })
    }
render(){
    const{studentdisplay}=this.state;

    return(
        <div>
            {studentdisplay.map(student=>(
                <Student key={student.id} studentdisplay={student}/>
            ))}
        </div>
    )
}


} 



export default StudentDetails;