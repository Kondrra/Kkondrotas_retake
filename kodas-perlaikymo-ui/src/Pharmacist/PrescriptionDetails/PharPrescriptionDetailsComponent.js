import React from 'react';

const PharPrescriptionDetailsComponent = (props) => {

  let someText = null;
  if(props.sold) {
    someText = <p>Receptas panaudotas</p>;
    } else {
      someText = <p><button type="submit" className="btn btn-success" onClick={props.onClick}>Panaudoti</button></p>;
      }

      return(
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Receptas #{props.id}</h3>
          </div>
          <div className="panel-body">
            <p>Paciento asmens kodas: {props.personalId}</p>
            <p>Israsymo data: {props.date}</p>
            <p>Aktyvioji medziaga: {props.activeMat}</p>
            <p>Aktyviosios medziagos kiekis: {props.activeMatQuantity} {props.unit}</p>
            <p>Aprasymas: {props.desc}</p>
            <p>Galioja iki: {props.validUntil}</p>
            {someText}
          </div>
        </div>
      );
    }




    export default PharPrescriptionDetailsComponent;
