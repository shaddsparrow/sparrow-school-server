import React from "react";
import axios from "axios";
import Highschool from "./Highschool";
import Loading from "./Loading";
import Error from "./Error";

class Highschoollistings extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {
            highschooldisplay: [],
            loading: false,
            error: false,
        }
    }

    componentDidMount(){
        this.fetchparentdisplay();
    }

    fetchparentdisplay() {
        this.setState({ loading: true, error: false })
        axios.get("/api/schools")
            .then(response => {
                this.setState({
                    highschooldisplay: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(
            error => {
                this.setState({
                    highschooldisplay: [],
                loading:false,
                error:true
                })
                        
            });
    }

    render() {
        const { highschooldisplay, loading, error } = this.state;
        if (loading) {
            return <Loading />;
        }
        if (error) {
            return <Error />;
        }






        return (
            <div className="ss-container" >
                <div className="ss-highschool-listings">
                    {
                        highschooldisplay.map(m => (
                            <Highschool key={m.id} highschooldisplay={m} />
                        ))
                    }
                </div>
            </div>
        );

    }
}


export default Highschoollistings;