import React, {Component} from 'react';
import {PrescriptionListComponent} from "./PrescriptionListComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

export class PrescriptionListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        prescriptions: [],
        doctorId: ''
      };
    }

    componentDidMount = () => {
      axios.get('http://localhost:8081/api/userId')
        .then((response) => {
          this.setState({
            doctorId: response.data
          });
          axios.get('http://localhost:8081/api/doctors/' + this.state.doctorId + '/prescriptions')
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
                <PrescriptionListComponent prescriptions={this.state.prescriptions} history={this.props.history}  />
            </div>
        );
    }
}
