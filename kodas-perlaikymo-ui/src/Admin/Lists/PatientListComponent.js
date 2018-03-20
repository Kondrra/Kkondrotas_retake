import React from 'react';
import PatientComponent from "./PatientComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientListComponent = (props) => {
      const patients = props.patients.map((patient, index) => {
        return (
          <PatientComponent
              key = {index}
              id = {patient.id}
              name = {patient.name}
              surname = {patient.surname}
              username = {patient.username}
              personalId = {patient.personalId}
              dateOfBirth = {patient.dateOfBirth}
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
                            <th>Asmens kodas</th>
                            <th>Gimimo data</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {patients}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PatientListComponent;
