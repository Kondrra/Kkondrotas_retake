import React from 'react';

const EditRecordComponent = (props) => {
  return(
    <form className="form-horizontal">

        <div className="form-group">
            <label className="col-sm-2 control-label">Vizito trukmė</label>
            <div className="col-sm-3">
                <select id="duration" value={props.duration}
                        onChange={props.onChange}>
                    <option></option>
                    <option>10 minučių</option>
                    <option>20 minučių</option>
                    <option>30 minučių</option>
                    <option>40 minučių</option>
                    <option>50 minučių</option>
                    <option>60 minučių</option>
                    <option>70 minučių</option>
                    <option>80 minučių</option>
                </select>
            </div>
        </div>

        <div className="form-group">
            <label className="col-sm-2 control-label">TLK-10</label>
            <div className="col-sm-3">
                <input type="text" className='form-control' id="tlk" placeholder="TLK-10" value={props.tlk}
                       onChange={props.onChange}/>
            </div>
        </div>


        <div className="form-group">
            <label className="col-sm-2 control-label">VLK</label>
            <div className="col-sm-3">
                <select id="vlk" value={props.vlk}
                       onChange={props.onChange}>
                    <option></option>
                    <option>Taip</option>
                    <option>Ne</option>
                </select>
            </div>
        </div>

        <div className="form-group">
            <label className="col-sm-2 control-label">Kartotinas</label>
            <div className="col-sm-3">
                <select id="repeated" placeholder="Kartotinas" value={props.repeated}
                       onChange={props.onChange}>
                    <option></option>
                    <option>Kartotinas</option>
                    <option>Nekartotinas</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Vizito aprašymas</label>
            <div className="col-sm-3">
                <textarea type="text" className="form-control" id="appDesc" placeholder="Vizito aprašymas" value={props.appDesc}
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
  );
};

export default EditRecordComponent;
