import React from 'react';

const DoctorDetailsComponent = (props) => {

 const styles = {
   margin: '20px'
 }
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="thumbnail" style={styles}>
          <img src="/user.png" alt="..." />
          <div className="caption">
            <h3>{props.doctor.name} {props.doctor.surname}</h3>
            <p>Vartotojo ID: {props.doctor.id}</p>
            <p>Vartotojo vardas: {props.doctor.username}</p>
            <p>Specializacija: {props.doctor.specialisation}</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default DoctorDetailsComponent;