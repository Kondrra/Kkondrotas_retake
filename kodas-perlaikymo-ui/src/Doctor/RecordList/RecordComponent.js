import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const green = {
  color: 'green',
  padding: '5px'
}

export var RecordComponent = (props) => {
  var {id, personalId, duration, tlk, appDesc, vlk, repeated, date} = props;

  var handleClick = (event) => {
      props.history.push('/doctor/record/' + id + '/edit');
      event.preventDefault();
  };


  var getRecord = (event) => {
      props.history.push("/doctor/record/" + id);
      event.preventDefault();
  };

  return (
      <tr>
        <td>{id}</td>
        <td>{personalId}</td>
        <td>{duration}</td>
        <td>{tlk}</td>
        <td>{appDesc}</td>
        <td>{vlk}</td>
        <td>{repeated}</td>
        <td>{date}</td>
          <td>
            <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green} onClick={handleClick}></span>
            <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green} onClick={getRecord}></span>
            </td>
      </tr>
  );

};
