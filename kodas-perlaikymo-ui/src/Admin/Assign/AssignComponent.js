import React, {Component} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

  class AssignComponent extends Component {
    constructor(props){
      super(props);

      this.state = {};
    }

    handleClick = (event) => {
      axios.put('http://localhost:8081/api/patient/' + this.props.patient + "/" + this.props.id)
        .then((response) => {
          alert("Pacientas priskirtas");
          this.props.history.push("/admin/patients");
        })
        .catch((error) => {
          console.log(error);
        })
    }

      render(){
        return(
          <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.surname}</td>
          <td>{this.props.username}</td>
          <td>{this.props.specialisation}</td>
              <td>
                <button type="submit" className="btn btn-success" onClick={this.handleClick}>Priskirti</button>
              </td>
          </tr>
        );
      }
    }

export default AssignComponent;
