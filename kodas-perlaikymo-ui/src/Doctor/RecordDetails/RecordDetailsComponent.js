import React from 'react';

export var RecordDetailsComponent = (props) => {

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Ligos įrašas #{props.record.id}</h3>
      </div>
      <div className="panel-body">
        <p>Paciento asmens kodas: {props.record.personalId}</p>
        <p>Vizito trukmė: {props.record.duration} min.</p>
        <p>TLK-10: {props.record.tlk}</p>
        <p>VLK: {props.record.vlk}</p>
        <p>Pakartotinis: {props.record.repeated}</p>
        <p>Įrašo data: {props.record.date}</p>
      </div>
    </div>
  );
};
