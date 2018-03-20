import React from 'react';

const PatientRecordDetailsComponent = (props) => {



  return (
    <div className="row">
      <div className="col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Ligos įrašas #{props.record.id}</h3>
          </div>
          <div class="panel-body">
            <p>Asmens kodas: {props.record.personalId}</p>
            <p>Vizito trukmė: {props.record.duration}</p>
            <p>TLK-10: {props.record.tlk}</p>
            <p>Vizito aprašymas: {props.record.appDesc}</p>
            <p>VLK kompensuojamas: {props.record.vlk}</p>
            <p>Kartotinas: {props.record.repeated}</p>
            <p>Daktaras: {props.record.doctorUsername}</p>
            <p>Data: {props.record.date}</p>
            <p><button type="submit" className="btn btn-default" onClick={props.history.goBack}>Atgal</button></p>
          </div>
        </div>

      </div>
    </div>
  );

};

export default PatientRecordDetailsComponent;
