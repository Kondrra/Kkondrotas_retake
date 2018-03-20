import React from 'react';

const ConfirmDoctorComponent = (props) => {

  return(
    <div>
      <h3>Patvirtinkite pasirinkimą</h3>
    <form className="form-horizontal">
              <div className="form-group">
                  <label className="col-sm-2 control-label">Gydytojas</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="doctorUsername" placeholder="Doctor" value={props.doctorUsername}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-3">
                      <button type="submit" className="btn btn-success" onClick={props.onClick}>Išsaugoti</button>
                  </div>
              </div>
          </form>
        </div>
  );
};

export default ConfirmDoctorComponent;
