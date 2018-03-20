import React, {Component} from 'react';
import {PharPrescriptionListComponent} from "./PharPrescriptionListComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class SoldPrescriptionListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          prescriptions: [],
          search: '',
          pharmacistId: ''
        };
    }

    componentDidMount = () => {
      axios.get('http://localhost:8081/api/userId')
        .then((response) => {
          this.setState({
            pharmacistId: response.data
          });
          axios.get('http://localhost:8081/api/soldPrescriptions/' + this.state.pharmacistId)
            .then((response) => {
              this.setState({
                prescriptions: response.data
              });
            })
            .catch((error) => {
              console.log(error);
            })
        })
        .catch((error) => {
          console.log(error);
        })

    };

    handleChange = (event) => {
        this.setState({search: event.target.value});
    };

    render() {
        if (this.state.prescriptions === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredPrescriptions = this.state.prescriptions.filter((prescription) => {
                    return prescription.personalId.indexOf(
                        this.state.search) !== -1 || prescription.name.indexOf(
                    this.state.search) !== -1 || prescription.surname.indexOf(
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
                        <PharPrescriptionListComponent
                            prescriptions={filteredPrescriptions}
                            history={this.props.history}
                            />
                    </div>
                </div>
            );
        }
    }
}

export default SoldPrescriptionListContainer;
