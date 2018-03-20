import React, {Component} from 'react';
import PatientRecordsComponent from './PatientRecordsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientRecords extends Component {

    constructor(props) {
        super(props);
        this.state = {
          records: [],
          id: ''
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({id: response.data});
                axios.get('http://localhost:8081/api/patients/' + this.state.id + '/records')
                    .then((response) => {
                      this.setState({records: response.data});
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
              <PatientRecordsComponent records={this.state.records} history={this.props.history} />
            </div>
        );
    }
}

export default PatientRecords;
