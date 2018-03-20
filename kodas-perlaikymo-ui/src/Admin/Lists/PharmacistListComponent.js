import React from 'react';
import PharmacistComponent from "./PharmacistComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PharmacistListComponent = (props) => {
      const pharmacists = props.pharmacists.map((pharmacist, index) => {
        return (
          <PharmacistComponent
              key = {index}
              id = {pharmacist.id}
              name = {pharmacist.name}
              surname = {pharmacist.surname}
              username = {pharmacist.username}
              companyType = {pharmacist.companyType}
              companyName = {pharmacist.companyName}
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
                            <th>Įmonės tipas</th>
                            <th>Įmonės pavadinimas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {pharmacists}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PharmacistListComponent;
