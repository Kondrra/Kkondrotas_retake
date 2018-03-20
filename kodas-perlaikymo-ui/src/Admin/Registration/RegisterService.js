import React, {Component} from 'react';
import {API} from '../ApiUrl';

import axios from 'axios';
import RegisterServiceComponent from "./registerServiceComponent";

class RegisterService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceName: '',
            price: '',
            category: '',
            description: '',
            picture: '',
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id;
        this.setState({
                [id]: value
            }
        );
    };
    EmptyFields() {
        if (this.state.serviceName === "" || this.state.price === "" || this.state.category === "" || this.state.description === "" || this.state.picture==="") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    handleClick = (event) => {
        if (this.EmptyFields()) {
            var outputService = {
                serviceName: this.state.serviceName,
                price: this.state.price,
                category: this.state.category,
                description: this.state.description,
                picture: this.state.picture,
            };
        }
        axios.post(API + "/api/services/new", outputService)
            .then((response) => {
                this.setState({
                   serviceName: '',
                    price: '',
                    category: '',
                    description: '',
                    picture: ''
                });
                alert("Paslauga užregistruota!");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterServiceComponent
                    name={this.state.serviceName}
                    surname={this.state.price}
                    username={this.state.category}
                    password={this.state.description}
                    companyType={this.state.picture}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterService;
