import React from 'react';
import {PrescriptionComponent} from "./PrescriptionComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var PrescriptionListComponent = (props) => {

    const prescriptions = props.prescriptions.map((prescription, index) => {
        return (
            <PrescriptionComponent
                key = {index}
                id = {prescription.id}
                personalId = {prescription.personalId}
                activeMat = {prescription.activeMat}
                activeMatQuantity = {prescription.activeMatQuantity}
                unit = {prescription.unit}
                desc = {prescription.desc}
                validUntil = {prescription.validUntil}
                timestamp = {prescription.timestamp}
                history = {props.history}
            />
        );
    });

    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Asmens kodas</th>
                            <th>Veiklioji medžiaga</th>
                            <th>Veikliosios medžiagos kiekis</th>
                            <th>Vienetai</th>
                            <th>Aprašymas</th>
                            <th>Galiojimo data</th>
                            <th>Išrašymo data</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {prescriptions}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
