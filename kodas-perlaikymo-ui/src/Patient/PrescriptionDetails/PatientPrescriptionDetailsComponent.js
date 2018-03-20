import React from 'react';

const PatientPrescriptionDetailsComponent = (props) => {

  return (
    <div className="row">
      <div className="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Receptas #{props.prescription.id}</h3>
          </div>
          <div class="panel-body">
            <p>Asmens kodas: {props.prescription.presonalId}</p>
            <p>Išrašymo data: {props.prescription.date}</p>
            <p>Aktyvioji medžiaga: {props.prescription.activeMat}</p>
            <p>Kiekis: {props.prescription.activeMatQuantity} {props.prescription.unit}</p>
            <p>Aprašymas: {props.prescription.desc}</p>
            <p>Išrašęs gydytojas: {props.prescription.doctorUsername}</p>
            <p>Galioja iki: {props.prescription.validUntil}</p>
            <p><button type="submit" className="btn btn-default" onClick={props.history.goBack}>Atgal</button></p>
          </div>
        </div>

      </div>
    </div>
  );

};

export default PatientPrescriptionDetailsComponent;
