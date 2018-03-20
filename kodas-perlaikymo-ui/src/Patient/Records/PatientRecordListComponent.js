import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, tlk, doctorUsername, date} = props;

  var getRecord = (event) => {
      props.history.push("/patient/record/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{date}</td>
        <td>{tlk}</td>
        <td>{doctorUsername}</td>
        <td>
          <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" onClick={getRecord}></span>
        </td>
      </tr>
  );

};

export default PatientPrescriptionListComponent;
