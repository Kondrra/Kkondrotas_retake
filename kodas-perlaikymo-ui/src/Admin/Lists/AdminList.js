import React, {Component} from 'react';
import AdminListComponent from "./AdminListComponent";
import {API} from '../ApiUrl';
import Pagination from "react-js-pagination";
import axios from 'axios';

axios.defaults.withCredentials = true;

class AdminList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            admins: [],
            totalItems: '',
            perPage: 10,
            activePage: 1,
            startPage: 0,
            search: ''
        };
    }

    componentDidMount = () => {
        axios.get(API + "/api/admins?page=" + this.state.startPage + "&size=" + this.state.perPage)
            .then((response) => {
                this.setState({
                    admins: response.data.content,
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
        axios.get(API + "/api/admins?page=" + number + "&size=" + this.state.perPage)
            .then((response) => {
                this.setState({
                    admins: response.data.content
                });
            })
    }


    render() {
        if (this.state.admins === null) {
            return (<div>nieko nėra</div>)
        } else {
            let filteredAdmins = this.state.admins.filter((admin) => {
                    return admin.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || admin.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
                        <AdminListComponent admins={filteredAdmins} history={this.props.history}/>
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

export default AdminList;
