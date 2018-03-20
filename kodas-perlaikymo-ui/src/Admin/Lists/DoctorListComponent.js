import React from 'react';
import DoctorComponent from "./DoctorComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const DoctorListComponent = (props) => {
      const doctors = props.doctors.map((doctor, index) => {
        return (
          <DoctorComponent
            key = {index}
            id = {doctor.id}
            name = {doctor.name}
            surname = {doctor.surname}
            username = {doctor.username}
            specialisation = {doctor.specialisation}
            history = {props.history}
            />
        );
      });
        return(
          <div>
            <div className="panel panel-default" style={tableStyle.margin}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Vartotojo vardas</th>
                        <th>Specializacija</th>
                        <th></th>
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
export default DoctorListComponent;
