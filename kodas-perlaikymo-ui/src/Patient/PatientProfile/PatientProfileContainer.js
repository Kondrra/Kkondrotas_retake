import React, {Component} from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientProfileContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          patient: {},
          id: ''
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({id: response.data});
                axios.get('http://localhost:8081/api/patients/' + this.state.id)
                    .then((response) => {
                      this.setState({patient: response.data})
                    })
                    .catch((error) => {
                      console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
      const styles = {
        margin: '20px'
      }
        return (
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail" style={styles}>
                <img src="/user.png" alt="..." />
                <div className="caption">
                  <h3>{this.state.patient.name} {this.state.patient.surname}</h3>
                  <p>Vartotojo ID: {this.state.patient.id}</p>
                  <p>Vartotojo vardas: {this.state.patient.username}</p>
                  <p>Asmens kodas: {this.state.patient.personalId}</p>
                  <p>Gimimo data: {this.state.patient.dateOfBirth}</p>
                  <p>Gydytojas: {this.state.patient.doctorUsername}</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PatientProfileContainer;
