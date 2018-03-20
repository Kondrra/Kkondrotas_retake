import React from 'react';

const EditPatientComponent = (props) => {
  return(
    <form className="form-horizontal">

              <div className="form-group">
                  <label className="col-sm-2 control-label">Vardas</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="name" placeholder="Vardas" value={props.name}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Pavardė</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="surname" placeholder="Pavardė" value={props.surname}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Vartotojo vardas</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="username" placeholder="Vartotojo vardas" value={props.username}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Asmens kodas</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="personalId" placeholder="Asmens kodas" value={props.personalId}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Gimimo data</label>
                  <div className="col-sm-3">
                      <input type="date" className="form-control" id="dateOfBirth" placeholder="Gimimo data" value={props.dateOfBirth}
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

export default EditPatientComponent;
