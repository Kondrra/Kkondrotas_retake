import React from 'react';
import EditPrescriptionComponent from "./EditPrescriptionComponent";
import axios from 'axios';
axios.defaults.withCredentials = true;

class EditPrescriptionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMat: '',
            activeMatQuantity: '',
            unit: '',
            desc: '',
            validUntil: '',
            history: {}
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/prescriptions/" + this.props.match.params.id)
        .then((response) => {
            const {activeMat, activeMatQuantity, unit, desc, validUntil} = response.data;
            this.setState({
                activeMat : activeMat,
                activeMatQuantity : activeMatQuantity,
                unit : unit,
                desc : desc,
                validUntil : validUntil,
                history: this.props.history
            })
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

    handleClick = (event) => {
        const outputProduct = {
            activeMat: this.state.activeMat,
            activeMatQuantity: this.state.activeMatQuantity,
            unit: this.state.unit,
            desc: this.state.desc,
            validUntil: this.state.validUntil
        };

        axios.put("http://localhost:8081/api/prescriptions/" + this.props.match.params.id, outputProduct)
            .then((response) => {
              alert("Duomenys išsaugoti!");
                this.props.history.push("/doctor/myPrescriptions");
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
                <EditPrescriptionComponent
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

export default EditPrescriptionContainer;
