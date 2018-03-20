import React, {Component} from 'react';
import DoctorListComponent from "./DoctorListComponent";
import {API} from '../ApiUrl';
import Pagination from "react-js-pagination";
import axios from 'axios';
axios.defaults.withCredentials = true;

class DoctorList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      totalItems: '',
      perPage: 10,
      activePage: 1,
      startPage: 0,
      search: ''
    };
  }

  componentDidMount = () => {
    axios.get(API + "/api/doctors?page=" + this.state.startPage + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        doctors: response.data.content,
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
    axios.get(API + "/api/doctors?page=" + number + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        doctors: response.data.content
      });
    })
  }

    render() {
        if (this.state.doctors === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredDoctors = this.state.doctors.filter((doctor) => {
                   return doctor.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || doctor.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                        <DoctorListComponent doctors={filteredDoctors} history={this.props.history} />
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
export default DoctorList;
