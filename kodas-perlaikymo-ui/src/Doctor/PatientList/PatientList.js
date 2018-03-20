import React, {Component} from 'react';
import DocPatientListComponent from "./PatientListComponent";
import {API} from "../../Admin/ApiUrl";
import Pagination from "react-js-pagination";
import axios from 'axios';
axios.defaults.withCredentials = true;


class DocPatientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      totalItems: '',
      perPage: 10,
      activePage: 1,
      startPage: 0,
      search: ''
    };
  }

  componentDidMount = () => {
    axios.get(API + "/api/patients?page=" + this.state.startPage + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        patients: response.data.content,
        totalItems: response.data.totalElements,

      });

    })
    .catch((error) => {
      console.log(error);
    });

  };
  handleChange = (event) => {
    this.setState({search: event.target.value});
  };

  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber
    });
    let number = parseInt(pageNumber) - 1;
    axios.get(API + "/api/patients?page=" + number + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        patients: response.data.content
      });
    })
  }

    render() {
        if (this.state.patients === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredPatients = this.state.patients.filter((patient) => {
                    return patient.personalId.indexOf(
                        this.state.search) !== -1|| patient.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1|| patient.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                          <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.perPage}
                            totalItemsCount={this.state.totalItems}
                            onChange={this.handlePageChange}
                            />
                    </div>
                </div>
            );
        }
    }
}
export default DocPatientList;
