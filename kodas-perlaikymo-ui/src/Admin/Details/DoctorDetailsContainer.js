import React, { Component } from 'react';
import DoctorDetailsComponent from './DoctorDetailsComponent';
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class DoctorDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      doctor: {}
    };

  }
  componentDidMount() {
    axios.get(API + "/api/doctors/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        doctor: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <DoctorDetailsComponent doctor={this.state.doctor} history={this.props.history}/>
    );
  }
}

export default DoctorDetailsContainer;
