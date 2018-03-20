import React from 'react';
import {RecordComponent} from "./RecordComponent";

const tableStyle = {
    margin : {marginTop : 20},
};

export var RecordListComponent = (props) => {

    const records = props.records.map((record, index) => {
        return (
            <RecordComponent
                key = {index}
                id = {record.id}
                personalId = {record.personalId}
                duration = {record.duration}
                tlk = {record.tlk}
                appDesc = {record.appDesc}
                vlk = {record.vlk}
                repeated = {record.repeated}
                date = {record.date}
                history = {props.history}
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
                            <th>Asmens kodas</th>
                            <th>Vizito trukmė</th>
                            <th>TLK-10</th>
                            <th>Vizito aprašymas</th>
                            <th>VLK</th>
                            <th>Kartotinas</th>
                            <th>Data</th>
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
