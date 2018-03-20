import React from 'react';
import PatientRecordListComponent from "./PatientRecordListComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

    const PatientRecordsComponent = (props) => {
      const records = props.records.map((record, index) => {
        return (
          <PatientRecordListComponent
                key = {index}
                id = {record.id}
                personalId = {record.personalId}
                duration = {record.duration}
                tlk = {record.tlk}
                appDesc = {record.appDesc}
                vlk = {record.vlk}
                doctorUsername = {record.doctorUsername}
                date = {record.date}
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
                            <th>Data</th>
                            <th>Ligos kodas</th>
                            <th>Gydytojas</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {records}
                    </tbody>
                </table>
            </div>
        </div>
        );
      };
export default PatientRecordsComponent;
