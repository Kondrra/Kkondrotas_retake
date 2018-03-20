import React, {Component} from 'react';
import DocPatientListComponent from "./PatientListComponent";
import {API} from "../../Admin/ApiUrl";
import axios from 'axios';
axios.defaults.withCredentials = true;


class DoctorPatientList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          patients: [],
          doctorId: '',
          search: ''
        };
    }



    componentDidMount = () => {
      axios.get(API + "/api/userId")
        .then((response) => {
          this.setState({ doctorId: response.data});
          axios.get(API + "/api/doctors/" + this.state.doctorId + "/patients")
              .then((response) => {
                  this.setState({patients: response.data});
              })
              .catch((error) => {
                  console.log(error);
              });
        })
        .catch((error) => {
          console.log(error);
        })
    };

    handleChange = (event) => {
        this.setState({search: event.target.value});
    };

    render() {
        if (this.state.patients === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredPatients = this.state.patients.filter((patient) => {
                    return patient.personalId.indexOf(
                        this.state.search) !== -1;
                }
            );
            return (
                <div className="row">
                    <form className="navbar-form" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input className="form-control" placeholder="Ieškoti" type="text" value={this.state.search}
                                   onChange={this.handleChange}/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}><i
                                    className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <DocPatientListComponent
                          patients={filteredPatients}
                          history={this.props.history}
                          />
                    </div>
                </div>
            );
        }
    }
}
export default DoctorPatientList;
