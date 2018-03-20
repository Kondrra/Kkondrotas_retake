import React from 'react';
import AdminComponent from "./AdminComponent";

const tableStyle = {
    margin: {marginTop: 20},
};

const AdminListComponent = (props) => {
    const admins = props.admins.map((admin, index) => {
        return (
            <AdminComponent
                key={index}
                id={admin.id}
                name={admin.name}
                surname={admin.surname}
                username={admin.username}
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
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Vartotojo vardas</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {admins}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminListComponent;
