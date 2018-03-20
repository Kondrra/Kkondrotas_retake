import React from 'react';
import PatientPrescriptionListComponent from "./PatientPrescriptionListComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientPrescriptionsComponent = (props) => {
      const validPrescriptions = props.prescriptions
                                    .filter((prescription) => prescription.sold === false)
                                    .map((prescription, index) => {
        return (
          <PatientPrescriptionListComponent
                key = {index}
                id = {prescription.id}
                personalId = {prescription.personalId}
                date = {prescription.timestamp}
                activeMat = {prescription.activeMat}
                activeMatQuantity = {prescription.activeMatQuantity}
                unit = {prescription.unit}
                desc = {prescription.desc}
                fullName={prescription.fullName}
                validUntil = {prescription.validUntil}
                history = {props.history}
            />
        );
      });
      const soldPrescriptions = props.prescriptions
                                    .filter((prescription) => prescription.sold === true)
                                    .map((prescription, index) => {
        return (
          <PatientPrescriptionListComponent
                key = {index}
                id = {prescription.id}
                personalId = {prescription.personalId}
                date = {prescription.timestamp}
                activeMat = {prescription.activeMat}
                activeMatQuantity = {prescription.activeMatQuantity}
                unit = {prescription.unit}
                desc = {prescription.desc}
                fullName={prescription.fullName}
                history = {props.history}
            />
        );
      });
        return(
          <div>
            <h3>Galiojantys receptai</h3>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Asmens kodas</th>
                            <th>Data</th>
                            <th>Aktyvioji medžiaga</th>
                            <th>Kiekis</th>
                            <th>Matavimo vnt</th>
                            <th>Aprašymas</th>
                            <th>Išrašė</th>
                            <th>Galioja iki</th>
                        </tr>
                    </thead>
                    <tbody>
                    {validPrescriptions}
                    </tbody>
                </table>
            </div>
            <h3>Negaliojantys receptai</h3>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Asmens kodas</th>
                            <th>Data</th>
                            <th>Aktyvioji medžiaga</th>
                            <th>Kiekis</th>
                            <th>Matavimo vnt</th>
                            <th>Aprašymas</th>
                            <th>Išrašė</th>
                        </tr>
                    </thead>
                    <tbody>
                    {soldPrescriptions}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PatientPrescriptionsComponent;
