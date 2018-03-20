import React from 'react';

const PatientDetailsComponent = (props) => {

  const styles = {
    margin: '20px'
  }

  var newPrescription = (event) => {
    props.history.push("/doctor/patient/" + props.patient.id + "/prescription");
    event.preventDefault();
  };

  var newRecord = (event) => {
    props.history.push("/doctor/patient/" + props.patient.id + "/record");
    event.preventDefault();
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="thumbnail" style={styles}>
          <img src="/user.png" alt="..." />
          <div className="caption">
            <h3>{props.patient.name} {props.patient.surname}</h3>
            <p>Vartotojo ID: {props.patient.id}</p>
            <p>Vartotojo vardas: {props.patient.username}</p>
            <p>Asmens kodas: {props.patient.personalId}</p>
            <p>Gimimo data: {props.patient.dateOfBirth}</p>
            <button type="submit" className="btn btn-success" onClick={newPrescription}>Receptas</button>
            <br/>
            <br/>
            <button type="submit" className="btn btn-success" onClick={newRecord}>Ligos įrašas</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default PatientDetailsComponent;
