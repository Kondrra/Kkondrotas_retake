import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;


const green = {
  color: 'green',
  padding: '5px'
}

 const PatientComponent = (props) => {
  var {id, name, surname, username, personalId, dateOfBirth} = props;

  var handleClick = (event) => {
      props.history.push("/admin/patient/edit/" + id);
      event.preventDefault();
  };

 /* var handleRemove = (event) => {
    props.remove(event.target.id);
    axios.delete(API + "/api/patients/" + event.target.id)
    .then(response => {

    })
    .catch(error => {
      console.log(error);
    })
  } TRYNIMO PAVYZDYS JEIGU PRIREIKTU*/
  var getPatient = (event) => {
      props.history.push("/admin/patient/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{username}</td>
        <td>{personalId}</td>
        <td>{dateOfBirth}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getPatient}></span>
            </td>
      </tr>
  );

};

export default PatientComponent;
