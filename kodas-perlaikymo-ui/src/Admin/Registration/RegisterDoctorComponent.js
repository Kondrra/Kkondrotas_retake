import React from 'react';

const RegisterDoctorComponent = (props) => {
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
                  <label className="col-sm-2 control-label">Slapyvardis</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="username" placeholder="Slapyvardis" value={props.username}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Slaptažodis</label>
                  <div className="col-sm-3">
                      <input type="text" className="form-control" id="password" placeholder="Slaptažodis" value={props.password}
                             onChange={props.onChange}/>
                  </div>
              </div>

              <div className="form-group">
                  <label className="col-sm-2 control-label">Specializacija</label>
                  <div className="col-sm-3">
                      <select id="specialisation" placeholder="Specializacija" value={props.specialisation}
                             onChange={props.onChange}>
                          <option></option>
                          <option>Apylinkės pediatras</option>
                          <option>Akušeris-ginekologas</option>
                          <option>Chirurgas</option>
                          <option>Psichiatras</option>
                          <option>Vaikų ir paauglių psichiatras</option>
                          <option>Priklausomybės ligų psichiatras</option>
                          <option>Medicinos psichologas</option>
                          <option>Medicinos gydytojas</option>
                          <option>Vidaus ligų gydytojas</option>
                          <option>Geriatras</option>
                          <option>Kardiologas</option>
                          <option>Vaikų kardiologas</option>
                          <option>Reumatologas</option>
                          <option>Vaikų reumatologas</option>
                          <option>Gastroenterologas</option>
                          <option>Vaikų gastroenterologas</option>
                          <option>Nefrologas</option>
                          <option>Vaikų nefrologas</option>
                          <option>Endokrinologas</option>
                          <option>Vaikų endokrinologas</option>
                          <option>Hematologas</option>
                          <option>Vaikų hematologas</option>
                          <option>Alergologas</option>
                          <option>Vaikų alergologas</option>
                          <option>Pulmonologas</option>
                          <option>Vaikų pulmonologas</option>
                          <option>Infektologas</option>
                          <option>Toksikologas    </option>
                          <option>Ftiziatras</option>
                          <option>Vaikų ftiziatras</option>
                          <option>Dermatovenerologas</option>
                          <option>Neurologas</option>
                          <option>Vaikų neurologas</option>
                          <option>Vaikų ligų gydytojas</option>
                          <option>Neonatologas</option>
                          <option>Anesteziologas-reanimatologas</option>
                          <option>Vaikų anesteziologas</option>
                          <option>Chirurgas</option>
                          <option>Vaikų chirurgas</option>
                          <option>Traumatologas-ortopedas</option>
                          <option>Vaikų ortopedo traumatologas</option>
                          <option>Vaikų urologas</option>
                          <option>Vaikų urologas</option>
                          <option>Neurochirurgas</option>
                          <option>Vaikų neurochirurgas</option>
                          <option>Kraujagyslių chirurgas</option>
                          <option>Koloproktologo</option>
                          <option>Krūtinės chirurgas</option>
                          <option>Širdies chirurgas</option>
                          <option>Plastinės ir rekonstrukcinės chirurgijos gydytojo</option>
                          <option>Veido ir žandikaulių chirurgo</option>
                          <option>Akušeris-ginekologas</option>
                          <option>Oftalmologas</option>
                          <option>Vaikų oftalmologas</option>
                          <option>Otorinolaringologas</option>
                          <option>Onkologas</option>
                          <option>Mamologas</option>
                          <option>Onkologas radioterapeutas</option>
                          <option>Onkologo chemioterapeutas</option>
                          <option>Psichiatras</option>
                          <option>Psichoterapeutas</option>
                          <option>Vaikų ir paauglių psichiatras</option>
                          <option>Darbo medicinos gydytojas</option>
                          <option>Genetikas</option>
                          <option>Odontologas</option>
                          <option>Burnos chirrugas</option>
                          <option>Ortodontas</option>
                          <option>Ortopedas odontologas</option>
                          <option>Endodontologas</option>
                          <option>Periodontologas</option>
                          <option>Vaikų odontologas</option>
                          <option>Burnos, veido ir žandikaulių chirurgas</option>
                          <option>Dietologas</option>
                          <option>Sporto medicinos gydytojas</option>
                      </select>
                      <input type="text" className="form-control" id="specialisation" placeholder="Kita specializacija" value={props.specialisation}
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

export default RegisterDoctorComponent;
