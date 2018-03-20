import React, { Component } from 'react';
import PharmacistDetailsComponent from './PharmacistDetailsComponent';
import {API} from '../ApiUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PharmacistDetailsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      pharmacist: {}
    };

  }
  componentDidMount() {
    axios.get(API + "/api/pharmacists/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        pharmacist: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });

  };


  render(){
    return(
        <PharmacistDetailsComponent pharmacist={this.state.pharmacist} history={this.props.history}/>
    );
  }
}

export default PharmacistDetailsContainer;
