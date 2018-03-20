import React, {Component} from 'react';
import ServiceListComponent from "./ServiceListComponent";
import {API} from '../ApiUrl';
import Pagination from "react-js-pagination";
import axios from 'axios';
axios.defaults.withCredentials = true;

class ServiceList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/services')
            .then((response) => {
                this.setState({services: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    };

  handleChange = (event) => {
    this.setState({search: event.target.value});
  };


    render() {
        if (this.state.services === null) {
            return (<div>nieko nera</div>)
        } else {
            let filteredServices = this.state.services.filter((service) => {
                  return  service.serviceName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || service.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                        <ServiceListComponent services={filteredServices} history={this.props.history}/>
                    </div>
                </div>
            );
        }
    }
}

export default ServiceList;
