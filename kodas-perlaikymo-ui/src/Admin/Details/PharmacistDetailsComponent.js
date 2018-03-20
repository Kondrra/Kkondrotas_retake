import React from 'react';

const PharmacistDetailsComponent = (props) => {

 const styles = {
   margin: '20px'
 }
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="thumbnail" style={styles}>
          <img src="/user.png" alt="..." />
          <div className="caption">
            <h3>{props.pharmacist.name} {props.pharmacist.surname}</h3>
            <p>Vartotojo ID: {props.pharmacist.id}</p>
            <p>Vartotojo vardas: {props.pharmacist.username}</p>
            <p>Darbovietė: {props.pharmacist.companyType} {props.pharmacist.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default PharmacistDetailsComponent;
