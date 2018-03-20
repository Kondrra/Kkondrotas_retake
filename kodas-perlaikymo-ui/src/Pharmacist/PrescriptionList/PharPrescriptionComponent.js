import React from 'react';


const green = {
    color: 'green',
    padding: '5px'
}

export var PharPrescriptionComponent = (props) => {
    var {id, personalId, timestamp, activeMat, activeMatQuantity, unit, desc, validUntil} = props;

    var getPrescription = (event) => {
        props.history.push("/pharmacist/prescription/" + id);
        event.preventDefault();
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{personalId}</td>
            <td>{timestamp}</td>
            <td>{activeMat}</td>
            <td>{activeMatQuantity}</td>
            <td>{unit}</td>
            <td>{desc}</td>
            <td>{validUntil}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getPrescription}></span>
            </td>
        </tr>
    );

};
