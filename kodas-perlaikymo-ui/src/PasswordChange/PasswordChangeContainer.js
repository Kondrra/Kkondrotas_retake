import React from 'react';
import PasswordChangeComponent from "./PasswordChangeComponent";
import axios from 'axios';

axios.defaults.withCredentials = true;

class PasswordChangeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matchingPass: '',
            newPassword: '',
            currentUserId: '',
            repeatedPassword: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/userId/")
            .then((response) => {
                this.setState({
                    currentUserId: response.data
                });
            })
            .catch((error) => {
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

    NewPasswordMatches() {
        if (this.state.newPassword === this.state.repeatedPassword) {
            return true;
        } else alert("Neteisingai pakartotas slaptažodis")
    }

    handleClick = (event) => {
        if(this.NewPasswordMatches())
        var outputProduct = {
            matchingPass: this.state.matchingPass,
            newPassword: this.state.newPassword,

        };

        axios.post("http://localhost:8081/api/user/" + this.state.currentUserId + "/changePassword", outputProduct)
            .then((response) => {
                alert("Duomenys išsaugoti!");
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
                <PasswordChangeComponent
                    name={this.state.name}
                    surname={this.state.surname}
                    username={this.state.username}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}

export default PasswordChangeContainer;
