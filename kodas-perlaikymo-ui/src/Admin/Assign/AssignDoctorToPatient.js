import React, {Component} from 'react';
import AssignDoctorListComponent from "./AssignDoctorListComponent";
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class AssignDoctorToPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {doctors: []};
    }

    componentDidMount = () => {
        axios.get(API + "/api/doctors")
            .then((response) => {
                this.setState({doctors: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <AssignDoctorListComponent doctors={this.state.doctors} history={this.props.history} patient={this.props.match.params.id}/>
            </div>
        );
    }
}

export default AssignDoctorToPatient;
