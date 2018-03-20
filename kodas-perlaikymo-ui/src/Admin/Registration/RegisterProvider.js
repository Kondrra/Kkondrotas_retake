import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterProviderComponent from './RegisterProviderComponent';
import axios from 'axios';


class RegisterProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            providerName: '',
            city: '',
            companyId: '',
            rating: '',
            history: props.history
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };

    EmptyFields() {
        if (this.state.providerName === "" || this.state.city === "" || this.state.companyId === "" || this.state.rating === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    handleClick = (event) => {
        if (this.EmptyFields()) {
            var outputProvider = {
                providerName: this.state.providerName,
                city: this.state.city,
                companyId: this.state.companyId,
                rating: this.state.rating,
            };
        }



        axios.post(API + "/api/providers/new", outputProvider)
            .then((response) => {
                this.setState({
                    providerName: '',
                    city: '',
                    companyId: '',
                    rating: ''
                });
                alert("Teikėjas užregistruotas!");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterDoctorComponent
                    name={this.state.providerName}
                    surname={this.state.city}
                    username={this.state.companyId}
                    password={this.state.rating}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterProvider;
