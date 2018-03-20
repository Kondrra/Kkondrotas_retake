import React from 'react';
import DoctorList from '../Lists/DoctorList';

const AssignDoctorComponent = (props) => {
  return(
    <div>
    <form className="form-horizontal">
      <div className="form-group">
        <label className="col-sm-2 control-label">Daktaras</label>
        <div className="col-sm-3">
          <input type="text" className="form-control" id="doctorUsername" placeholder="Daktaras" value={props.doctorUsername}
            onChange={props.onChange}/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-3">
          <button type="submit" className="btn btn-success" onClick={props.onClick}>Save</button>
          <button type="submit" className="btn btn-default" onClick={props.history.goBack}>Cancel</button>
        </div>
      </div>
    </form>
  </div>
  );
};

export default AssignDoctorComponent;
