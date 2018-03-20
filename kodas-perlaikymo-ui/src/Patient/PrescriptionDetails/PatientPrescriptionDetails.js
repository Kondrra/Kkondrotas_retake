import React, { Component } from 'react';
import PatientPrescriptionDetailsComponent from './PatientPrescriptionDetailsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientPrescriptionDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      prescription: {}
    };

  }
  componentDidMount() {
    axios.get('http://localhost:8081/api/prescriptions/'  + this.props.match.params.id)
    .then((response) => {
      this.setState({
        prescription: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };

  handleClick = (event) => {

  };


  render(){
    return(
        <PatientPrescriptionDetailsComponent
          prescription={this.state.prescription}
          history={this.props.history}
          onClick={this.handleClick}/>
    );
  }
}

export default PatientPrescriptionDetails;
