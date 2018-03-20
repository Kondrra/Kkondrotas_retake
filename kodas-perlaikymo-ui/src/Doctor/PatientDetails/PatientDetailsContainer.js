import React, { Component } from 'react';
import PatientDetailsComponent from './PatientDetailsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      patient: {}
    };

  }
  componentDidMount() {
    axios.get("http://localhost:8081/api/patients/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        patient: response.data
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
        <PatientDetailsComponent
          patient={this.state.patient}
          history={this.props.history}
          onClick={this.handleClick}/>
    );
  }
}

export default PatientDetailsContainer;
