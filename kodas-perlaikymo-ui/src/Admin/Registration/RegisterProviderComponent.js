import React from 'react';

const RegisterProviderComponent = (props) => {
    return(
        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Pavadinimas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="providerName" placeholder="Pavadinimas" value={props.providerName}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Miestas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="city" placeholder="Miestas" value={props.city}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Įmonės kodas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="companyId" placeholder="Įmonės kodas" value={props.companyId}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">įvertinimas</label>
                <div className="col-sm-3">
                    <select id="rating" placeholder="įvertinimas" value={props.rating}
                            onChange={props.onChange}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
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

export default RegisterProviderComponent;