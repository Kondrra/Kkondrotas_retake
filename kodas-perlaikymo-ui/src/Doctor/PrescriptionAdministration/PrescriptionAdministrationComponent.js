import React from 'react';

export var PrescriptionAdministrationComponent = (props) => {

    return (
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Asmens kodas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="personalId" placeholder="Asmens kodas" value={props.personalId}
                           onChange={props.onChange}/>
                </div>
            </div>


            <div className="form-group">
                <label className="col-sm-2 control-label">Veiklioji medžiaga</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMat" placeholder="Veiklioji medžiaga" value={props.activeMat}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Veikliosios medžiagos kiekis vienoje dozėje</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="activeMatQuantity" placeholder="Veikliosios medžiagos kiekis" value={props.activeMatQuantity}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Veikliosios medžiagos matavimo vienetai</label>
                <div className="col-sm-3">
                    <select id="unit" value={props.unit}
                           onChange={props.onChange}>
                        <option></option>
                        <option>Miligramai</option>
                        <option>Mikrogramai</option>
                        <option>TV/IU</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Vartojimo aprašymas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="desc" placeholder="Aprašymas" value={props.desc}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Galiojimo data</label>
                <div className="col-sm-3">
                    <input type="date" className="form-control" id="validUntil" placeholder="Galiojimo data" value={props.validUntil}
                           onChange={props.onChange}/>
                    <select id="validUntil" value={props.validUntil} onChange={props.onChange}>
                        <option></option>
                        <option>Neterminuotas</option>
                    </select>
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
