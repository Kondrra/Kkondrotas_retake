import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;


const green = {
    color: 'green',
    padding: '5px'
}

const DoctorComponent = (props) => {
    var {id, name, surname, username, specialisation} = props;

    var handleClick = (event) => {
        props.history.push("/admin/doctor/edit/" + id);
        event.preventDefault();
    };

    var getDoctor = (event) => {
        props.history.push("/admin/doctor/" + id);
        event.preventDefault();
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>{specialisation}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green}
                      onClick={handleClick}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                      onClick={getDoctor}></span>
            </td>
        </tr>
    );

};

export default DoctorComponent;
