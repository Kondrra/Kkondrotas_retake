import React from 'react';

 const PatientPrescriptionListComponent = (props) => {
  var {id, personalId, timestamp, activeMat, activeMatQuantity, unit, desc, validUntil, sold, fullName} = props;

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{timestamp}</td>
        <td>{activeMat}</td>
        <td>{activeMatQuantity}</td>
        <td>{unit}</td>
        <td>{desc}</td>
        <td>{fullName}</td>
        <td>{validUntil}</td>
      </tr>
  );

};

export default PatientPrescriptionListComponent;
