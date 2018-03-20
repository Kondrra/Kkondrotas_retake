import React from 'react';
import {PrescriptionAdministrationComponent} from "./PrescriptionAdministrationComponent";
import axios from 'axios';

axios.defaults.withCredentials = true;


export class PrescriptionAdministrationContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalId: '',
            activeMat: '',
            activeMatQuantity: '',
            unit: '',
            desc: '',
            validUntil: '',
            timestamp: '',
            patientId: '',
            doctorId: '',
            fullName: '',
            history: props.history
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8081/api/userId/')
            .then((response) => {
                this.setState({doctorId: response.data});
                axios.get('http://localhost:8081/api/patients/' +  this.props.match.params.id)
                  .then((response) => {
                    const {id, personalId} = response.data;
                    this.setState({
                      personalId: personalId,
                      patientId: id
                    });

                    axios.get('http://localhost:8081/api/doctors/' + this.state.doctorId)
                      .then((response) => {
                        this.setState({
                          fullName: response.data.fullName

                        });

                      })
                      .catch((error) => {
                        console.log(error);
                      })
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
    PositiveNumber() {
        if (parseInt(this.state.activeMatQuantity) > 0) {
            return true;
        } else {
            alert("Įveskite teigiamą skaičių.")
        }
    }
    NotEmpty(){
        if  (this.state.unit === ""|| this.state.desc === "" ||this.state.validUntil === ""||this.state.activeMat === "") {
            alert("Visi laukai turi būti užpildyti");
        } else { return true;
        }
    }
    handleClick = (event) => {
        if (this.NotEmpty() && this.PositiveNumber()) {
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
            var outputPrescription = {
                personalId: this.state.personalId,
                activeMat: this.state.activeMat,
                activeMatQuantity: this.state.activeMatQuantity,
                unit: this.state.unit,
                desc: this.state.desc,
                validUntil: this.state.validUntil,
                timestamp: this.state.timestamp = today,
                fullName: this.state.fullName
            };
        }
        if (this.state.personalId === "") {
            alert("Prašome įvesti asmens kodą.");
        }
        if (this.state.personalId.length !== 11) {
            alert("Asmens kodas turi būti sudarytas iš 11 skaitmenų.")
        }
        if (this.state.activeMat.length >50){
            alert("Veiklioji medžiaga negali viršyti 50 simbolių")
        }
        axios.post('http://localhost:8081/api/prescriptions/new/' + this.state.doctorId + '/' + this.state.patientId, outputPrescription)
            .then((response) => {
                this.setState({
                    personalId: '',
                    activeMat: '',
                    activeMatQuantity: '',
                    unit: '',
                    desc: '',
                    validUntil: '',
                    timestamp: '',
                    fullName: this.state.fullName
                });
                alert("Receptas išrašytas");
                this.props.history.push("/doctor/prescriptions");
            })
            .catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <PrescriptionAdministrationComponent
                    personalId={this.state.personalId}
                    date={this.state.date}
                    activeMat={this.state.activeMat}
                    activeMatQuantity={this.state.activeMatQuantity}
                    unit={this.state.unit}
                    desc={this.state.desc}
                    validUntil={this.state.validUntil}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    history={this.state.history}
                />
            </div>
        );
    }
}
