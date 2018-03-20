import React from 'react';
import {RecordAdministrationComponent} from "./RecordAdministrationComponent";
import axios from 'axios';

axios.defaults.withCredentials = true;


export class RecordAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            duration: '',
            tlk: '',
            appDesc: '',
            vlk: '',
            repeated: '',
            date: '',
            patientId: '',
            doctorId: '',
            history: props.history
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({doctorId: response.data});
                axios.get('http://localhost:8081/api/patients/' + this.props.match.params.id)
                    .then((response) => {
                        const {id, personalId} = response.data;
                        this.setState({
                            personalId: personalId,
                            patientId: id
                        });

                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            });
    };


    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const id = target.id; // iš input tag'o gaunam būsenos objekto raktą reikšmei nustatyti
        this.setState({
                [id]: value
            }
        );
    };
    handleClick = (event) => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;
        this.state.date.setState(today)
        const outputRecord = {
            personalId: this.state.personalId,
            duration: this.state.duration,
            tlk: this.state.tlk,
            appDesc: this.state.appDesc,
            vlk: this.state.vlk,
            repeated: this.state.repeated,
            date: this.state.date
        };
        if (this.state.personalId === "") {
            alert("Prašome įvesti asmens kodą");
        }
        if (this.state.personalId.length > 11) {
            alert("Asmens kodas turi būti sudarytas iš 11 simbolių");
        }
        if (this.state.personalId.length < 11) {
            alert("Asmens kodas turi būti sudarytas iš 11 simbolių");
        }
        if (this.state.tlk === "") {
            alert("Prašome pasirinkti TLK kodą");
        }
        if (this.state.duration === "") {
            alert("Prašome įvesti vizito trukmę");
        }
        if (this.state.appDesc === "") {
            alert("Prašome įvesti vizito aprašymą");
        }
        if (this.state.duration === "") {
            alert("Prašome įvesti vizito trukmę");
        }
        if (this.state.repeated === "") {
            alert("Prašome pažymėti ar vizitas pakartotinis");
        }
        if (this.state.date === "") {
            alert("Prašome įvesti vizito datą");
        }

        axios.post('http://localhost:8081/api/records/new/' + this.state.doctorId + '/' + this.state.patientId, outputRecord)
            .then((response) => {
                this.setState({
                    personalId: '',
                    duration: '',
                    tlk: '',
                    appDesc: '',
                    vlk: '',
                    repeated: '',
                    date: ''
                });
                alert("Ligos istorija sėkmingai užregistruota");
                this.props.history.push("/doctor/records");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <RecordAdministrationComponent
                    personalId={this.state.personalId}
                    duration={this.state.duration}
                    tlk={this.state.tlk}
                    appDesc={this.state.appDesc}
                    vlk={this.state.vlk}
                    repeated={this.state.repeated}
                    date={this.state.date}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
