import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterPharmacistComponent from './RegisterPharmacistComponent';
import axios from 'axios';
axios.defaults.withCredentials = true;

class RegisterPharmacist extends Component {
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
    PasswordLength(){ //Checks whether password has 6 or more symbols.
        if (this.state.password.length < 6) {
            alert("Slaptažodis turi būti sudarytas iš bent 6 simbolių");
        } else {
            return true;
        }
    }

    handleClick = (event) => {
        if (this.EmptyFields() && this.PasswordLength()) {
            var outputPharmacist = {
                name: this.state.name,
                surname: this.state.surname,
                username: this.state.username,
                password: this.state.password,
                companyType: this.state.companyType,
                companyName: this.state.companyName
            };
        }
        if (this.state.name.length > 30){
            alert("Vardas turi neviršyti 30 simbolių");
        }
        if (this.state.surname.length > 30){
            alert("Pavardė turi neviršyti 30 simbolių")
        }
        axios.post(API + "/api/admin/pharmacists/new", outputPharmacist)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    companyType: '',
                    companyName: ''
                });
                alert("Vaistininkas užregistruotas!");
                this.props.history.push("/admin/pharmacists");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterPharmacistComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    companyType={this.state.companyType}
                    companyName={this.state.companyName}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterPharmacist;
