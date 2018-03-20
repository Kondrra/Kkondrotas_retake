import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterAdminComponent from './RegisterAdminComponent';
import axios from 'axios';

axios.defaults.withCredentials = true;

class RegisterAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
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
        if (this.state.name === "" || this.state.surname === "" || this.state.username === "" || this.state.personalId === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }
    PasswordLength(){
        if (this.state.password.length < 6) {
            alert("Slaptažodis turi būti sudarytas iš bent 6 simbolių");
        } else {
            return true;
        }
    }
    handleClick = (event) => {
        if (this.EmptyFields()&& this.PasswordLength()) {
            var outputAdmin = {
                name: this.state.name,
                surname: this.state.surname,
                username: this.state.username,
                password: this.state.password
            };
        }
        axios.post(API + "/api/admin/admins/new", outputAdmin)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: ''
                });
                alert("Administratorius užregistruotas!");
                this.props.history.push("/admin/admins");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterAdminComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterAdmin;
