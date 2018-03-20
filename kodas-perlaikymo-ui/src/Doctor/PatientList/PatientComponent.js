import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const green = {
    color: 'green',
    padding: '5px'
}

const DocPatientComponent = (props) => {
    var {id, name, surname, username, personalId, dateOfBirth} = props;
    console.log(props);


    var getPatientRecords = (event) => {
        props.history.push("/doctor/patient/records/" + id);
    }
    var getPatient = (event) => {
        props.history.push("/doctor/patient/" + id);
    }
    var getPatientPrescriptions = (event) => {
        props.history.push("/doctor/patient/prescriptions/" + id);
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>{personalId}</td>
            <td>{dateOfBirth}</td>
            <td>

                <span id={id} className="glyphicon glyphicon-book" aria-hidden="true" /*Paciento ligos įrašai*/ style={green} onClick={getPatientRecords}></span>
                <span id={id} className="glyphicon glyphicon-check" aria-hidden="true" /*Paciento receptai*/ style={green} onClick={getPatientPrescriptions}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" /*Išrašyti receptą arba ligos įrašą*/ style={green} onClick={getPatient}></span>

            </td>
        </tr>
    );

};

export default DocPatientComponent;
