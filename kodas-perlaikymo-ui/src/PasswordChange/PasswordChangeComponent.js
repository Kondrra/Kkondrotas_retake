import React from 'react';

const PasswordChangeComponent = (props) => {
    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Senas slaptažodis</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="matchingPass" placeholder="Senas slaptažodis"
                           value={props.matchingPass}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Naujas slaptažodis</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="newPassword" placeholder="Naujas slaptažodis"
                           value={props.newPassword}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Pakartokite naują slaptažodį</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="repeatedPassword" placeholder="Naujas slaptažodis"
                           value={props.repeatedPassword}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-3">
                    <button type="submit" className="btn btn-success" onClick={props.onClick}>Išsaugoti</button>
                    <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Atšaukti</button>
                </div>
            </div>
        </form>
    );
};

export default PasswordChangeComponent;
