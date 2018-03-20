import React from 'react';

const PrescriptionDetailsComponent = (props) => {

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Receptas #{props.prescription.id}</h3>
      </div>
      <div className="panel-body">
        <p>Paciento asmens kodas: {props.prescription.personalId}</p>
        <p>Israsymo data: {props.prescription.timestamp}</p>
        <p>Aktyvioji medziaga: {props.prescription.activeMat}</p>
        <p>Aktyviosios medziagos kiekis: {props.prescription.activeMatQuantity} {props.prescription.unit}</p>
        <p>Aprasymas: {props.prescription.desc}</p>
        <p>Galioja iki: {props.prescription.validUntil}</p>
      </div>
    </div>
  );
};

export default PrescriptionDetailsComponent;
