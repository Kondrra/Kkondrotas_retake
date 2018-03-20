import React, {Component} from 'react';
import Forma from './Forma';
import axios from 'axios';
axios.defaults.withCredentials = true;

class FormaContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      role: ''
    };
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onPassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render(){
    return(
      <Forma
            username={this.state.username}
            password={this.state.password}
            onUsernameChange={this.onUsernameChange}
            onPassChange={this.onPassChange}
            onSubmit={this.onSubmit}
            />
    );
  }

}

export default FormaContainer;
