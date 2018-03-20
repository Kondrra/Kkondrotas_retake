import React, { Component } from 'react';
import PatientRecordDetailsComponent from './PatientRecordDetailsComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientRecordDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      record: {}
    };

  }
  componentDidMount() {
    axios.get('http://localhost:8081/api/records/'  + this.props.match.params.id)
    .then((response) => {
      this.setState({
        record: response.data
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
        <PatientRecordDetailsComponent
          record={this.state.record}
          history={this.props.history}
          onClick={this.handleClick}/>
    );
  }
}

export default PatientRecordDetails;
