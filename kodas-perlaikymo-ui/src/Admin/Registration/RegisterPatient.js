import React, {Component} from 'react';
import {API} from '../ApiUrl';
import RegisterPatientComponent from './RegisterPatientComponent';
import axios from 'axios';

axios.defaults.withCredentials = true;

class RegisterPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            password: '',
            personalId: '',
            dateOfBirth: '',
            doctorUsername: '',
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

    IdMatchesBirth() {
        if (this.state.personalId.substring(1, 3) === this.state.dateOfBirth.substring(2, 4) &&
            this.state.personalId.substring(3, 5) === this.state.dateOfBirth.substring(5, 7) &&
            this.state.personalId.substring(5, 7) === this.state.dateOfBirth.substring(8, 10)) {
            return true;
        } else {
            alert("Asmens kodas nesutampa su gimimo data")
        }
    }

    EmptyFields() {
        if (this.state.name === "" || this.state.surname === "" || this.state.username === "" || this.state.personalId === "" || this.state.dateOfBirth === "") {
            alert("Visi laukai turi būti užpildyti");
        } else return true;
    }

    BirthdayNotIntheFuture() {

        var currentDate = new Date();
        var dd = currentDate.getDate();
        var mm = currentDate.getMonth() + 1;
        var yyyy = currentDate.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        if (parseInt(this.state.dateOfBirth.substring(0, 4)) < yyyy) {
            return true;
        } else if (parseInt(this.state.dateOfBirth.substring(0, 4)) === yyyy &&
            parseInt(this.state.dateOfBirth.substring(5, 7)) < mm) {
            return true;
        } else if (parseInt(this.state.dateOfBirth.substring(0, 4)) === yyyy &&
            parseInt(this.state.dateOfBirth.substring(5, 7)) === mm &&
            parseInt(this.state.dateOfBirth.substring(8, 10) <= dd)) {
            return true;
        } else {
            alert("Neteisinga data")
        }
    }
    PersonalId(){
        if (this.state.personalId.length !== 11) {
            alert("Asmens kodas turi būti sudarytas iš 11 skaitmenų")
        } else {
            return true;
        }
    }
    PasswordLength(){
        if (this.state.password.length < 6) {
            alert("Slaptažodis turi būti sudarytas iš bent 6 simbolių");
        } else {
            return true;
        }
    }

    handleClick = (event) => {
        if (this.EmptyFields() && this.PersonalId() && this.IdMatchesBirth() && this.BirthdayNotIntheFuture() && this.PasswordLength()) {
            var outputPatient = {
                name: this.state.name,
                surname: this.state.surname,
                username: this.state.username,
                password: this.state.password,
                personalId: this.state.personalId,
                dateOfBirth: this.state.dateOfBirth,
                doctorUsername: this.state.doctorUsername
            };
        }


        axios.post(API + "/api/admin/patients/new", outputPatient)
            .then((response) => {
                this.setState({
                    name: '',
                    surname: '',
                    username: '',
                    password: '',
                    personalId: '',
                    dateOfBirth: '',
                    doctorUsername: ''
                });
                alert("Pacientas užregistruotas!");
                this.props.history.push("/admin/patients");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RegisterPatientComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    password={this.state.password}
                    personalId={this.state.personalId}
                    dateOfBirth={this.state.dateOfBirth}
                    doctorUsername={this.state.doctorUsername}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default RegisterPatient;
