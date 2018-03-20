import React from 'react';
import AssignComponent from "./AssignComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const AssignDoctorListComponent = (props) => {
      const doctors = props.doctors.map((doctor, index) => {
        return (
          <AssignComponent
            key = {index}
            id = {doctor.id}
            name = {doctor.name}
            surname = {doctor.surname}
            username = {doctor.username}
            specialisation = {doctor.specialisation}
            history = {props.history}
            patient = {props.patient}
            />
        );
      });
        return(
          <div>
            <h4>Pasirinkite gydytoją</h4>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Vartotojo vardas</th>
                        <th>Specializacija</th>
                        <th>Priskirti</th>
                        </tr>
                    </thead>
                    <tbody>
                    {doctors}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default AssignDoctorListComponent;
