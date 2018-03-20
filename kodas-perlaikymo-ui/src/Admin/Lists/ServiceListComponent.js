import React from 'react';
import ServiceComponent from "./ServiceComponent";

const tableStyle = {
    margin: {marginTop: 20},
};

const ServiceListComponent = (props) => {
    const services = props.services.map((service, index) => {
        return (
            <ServiceComponent
                key={index}
                id={service.id}
                serviceName={service.serviceName}
                price={service.price}
                category={service.category}
                description={service.description}
                picture={service.picture}
                history={props.history}
            />
        );
    });
    return (
        <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Kaina</th>
                        <th>Kategorija</th>
                        <th>Aprašymas</th>
                        <th>paveikliukas</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {services}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ServiceListComponent;
