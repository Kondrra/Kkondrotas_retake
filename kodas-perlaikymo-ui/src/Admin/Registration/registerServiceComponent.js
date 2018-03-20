import React from 'react';

const RegisterServiceComponent = (props) => {
    return (

        <form className="form-horizontal">

            <div className="form-group">
                <label className="col-sm-2 control-label">Pavadinimas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="serviceName" placeholder="Pavadinimas" value={props.serviceName}
                           onChange={props.onChange}/>
                </div>
            </div>

            <div className="form-group">
                <label className="col-sm-2 control-label">Kaina</label>
                <div className="col-sm-3">
                    <input type="number" className="form-control" id="price" placeholder="Kaina" value={props.price}
                           onChange={props.onChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label">Nuotrauka</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="picture" placeholder="Nuotrauka" value={props.picture}
                           onChange={props.onChange}/>
                </div>
            </div>


            <div className="form-group">
                <label className="col-sm-2 control-label">Kategorija</label>
                <div className="col-sm-3">
                    <select id="category" value={props.category} onChange={props.onChange}>
                        <option></option>
                        <option>IT</option>
                        <option>Maistas</option>
                        <option>Transportas</option>
                        <option>Grožio paslaugos</option>
                        <option>Ugdymo paslaugos</option>
                    </select>
                </div>
            </div>


            <div className="form-group">
                <label className="col-sm-2 control-label">Aprašymas</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="description" placeholder="Aprašymas"
                           value={props.description}
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

export default RegisterServiceComponent;