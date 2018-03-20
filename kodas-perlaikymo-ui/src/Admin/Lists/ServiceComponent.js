import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const green = {
    color: 'green',
    padding: '5px'
}

const ServiceComponent = (props) => {
    var {id, serviceName, price, category, description, picture} = props;

    var handleClick = (event) => {
        props.history.push("/admin/service/edit/" + id);
        event.preventDefault();
    };

    var getAdmin = (event) => {
        props.history.push("/admin/service/buy");
        event.preventDefault();
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{serviceName}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{picture}</td>
            <td>
                <span id={id} className="glyphicon glyphicon-wrench" aria-hidden="true" style={green}
                      onClick={handleClick}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                      onClick={getAdmin}></span>
                <span id={id} className="glyphicon glyphicon-eye-open" aria-hidden="true" style={green}
                      onClick={getAdmin}></span>
            </td>
        </tr>
    );

};

export default ServiceComponent;
