import React, {Component} from 'react';
import PatientPrescriptionsComponent from './PatientPrescriptionsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientPrescriptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
          prescriptions: [],
          id: ''
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({id: response.data});
                axios.get('http://localhost:8081/api/patients/' + this.state.id + '/prescriptions')
                    .then((response) => {
                      this.setState({prescriptions: response.data});
                    })
                    .catch((error) => {
                      console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
              <PatientPrescriptionsComponent prescriptions={this.state.prescriptions} history={this.props.history} />
            </div>
        );
    }
}

export default PatientPrescriptions;
