import React, {Component} from 'react';
import PharmacistListComponent from "./PharmacistListComponent";
import {API} from '../ApiUrl';
import Pagination from "react-js-pagination";
import axios from 'axios';
axios.defaults.withCredentials = true;

class PharmacistList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pharmacists: [],
      totalItems: '',
      perPage: 10,
      activePage: 1,
      startPage: 0,
      search: ''
    };
  }

  componentDidMount = () => {
    axios.get(API + "/api/pharmacists?page=" + this.state.startPage + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        pharmacists: response.data.content,
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
    axios.get(API + "/api/pharmacists?page=" + number + "&size=" + this.state.perPage)
    .then((response) => {
      this.setState({
        pharmacists: response.data.content
      });
    })
  }

    render() {
        if (this.state.pharmacists === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredPharmacists = this.state.pharmacists.filter((pharmacist) => {
                  return  pharmacist.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || pharmacist.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                        <PharmacistListComponent pharmacists={filteredPharmacists} history={this.props.history}/>
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

export default PharmacistList;
