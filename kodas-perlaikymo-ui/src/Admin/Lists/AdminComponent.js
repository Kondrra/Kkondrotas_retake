import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const green = {
    color: 'green',
    padding: '5px'
}

const AdminComponent = (props) => {
    var {id, name, surname, username} = props;

    var handleClick = (event) => {
        props.history.push("/admin/admin/edit/" + id);
        event.preventDefault();
    };

    var getAdmin = (event) => {
        props.history.push("/admin/admin/" + id);
        event.preventDefault();
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green}
                      onClick={handleClick}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                      onClick={getAdmin}></span>
            </td>
        </tr>
    );

};

export default AdminComponent;
