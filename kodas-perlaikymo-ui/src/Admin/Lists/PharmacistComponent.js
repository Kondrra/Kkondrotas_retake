import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const green = {
  color: 'green',
  padding: '5px'
}

 const PharmacistComponent = (props) => {
  var {id, name, surname, username, companyType, companyName} = props;

  var handleClick = (event) => {
      props.history.push("/admin/pharmacist/edit/" + id);
      event.preventDefault();
  };

  var getPharmacist = (event) => {
      props.history.push("/admin/pharmacist/" + id);
      event.preventDefault();
  };

  return (
      <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{username}</td>
      <td>{companyType}</td>
      <td>{companyName}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getPharmacist}></span>
            </td>
      </tr>
  );

};

export default PharmacistComponent;
