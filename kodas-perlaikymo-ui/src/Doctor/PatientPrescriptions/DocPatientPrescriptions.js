import React, {Component} from 'react';
import axios from 'axios';
import {PrescriptionListComponent} from "../PrescriptionList/PrescriptionListComponent";
axios.defaults.withCredentials = true;

export class DocPatientPrescriptions extends Component {

    constructor(props) {
        super(props);
        this.state = {prescriptions: []};
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/patients/'+ this.props.match.params.id + '/prescriptions')
            .then((response) => {
                this.setState({prescriptions: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

    removeRecord = (index) => {
        const items = this.state.prescriptions.filter((record) => {
            return record.id !== parseInt(index, 10);
        });
        this.setState({prescriptions: items});
    }

    render() {
        if (this.state.prescriptions === null) {
            return (<div>nieko nera</div>)
        } else {
            return (
                <div>
                    <PrescriptionListComponent prescriptions={this.state.prescriptions} history={this.props.history}
                                         remove={this.removeRecord}/>
                </div>
            );
        }
    }
}
