import React from 'react';
import {API} from '../ApiUrl';
import EditPatientComponent from "./EditPatientComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class PatientEditContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            username: '',
            personalId: '',
            dateOfBirth: '',
            history: {}
        }

    }

    componentDidMount() {
        axios.get(API + "/api/patients/" + this.props.match.params.id)
        .then(response => {
            const {name, surname, username, personalId, dateOfBirth} = response.data;
            this.setState({
                name : name,
                surname : surname,
                username : username,
                personalId : personalId,
                dateOfBirth : dateOfBirth,
                history: this.props.history
            })
        })
        .catch(error => {
            console.log(error);
        })
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

    handleClick = (event) => {
        const outputProduct = {
            name: this.state.name,
            surname: this.state.surname,
            username: this.state.username,
            personalId: this.state.personalId,
            dateOfBirth: this.state.dateOfBirth
        };

        axios.put(API + "/api/patients/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
              this.props.history.push("/admin/patients");
            })
            .catch((error) => {
              alert("Nepavyko! Blogai įvesti duomenys");
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <EditPatientComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    personalId={this.state.personalId}
                    dateOfBirth={this.state.dateOfBirth}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default PatientEditContainer;
