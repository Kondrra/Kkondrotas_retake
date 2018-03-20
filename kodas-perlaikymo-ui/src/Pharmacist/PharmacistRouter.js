import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import {PharPrescriptionListContainer} from "./PrescriptionList/PharPrescriptionListContainer";
import PharPrescriptionDetailsContainer from './PrescriptionDetails/PharPrescriptionDetailsContainer';
import PharPrescriptionSold from './Sold/PharPrescriptionSold';
import SoldPrescriptionListContainer from './PrescriptionList/SoldPrescriptionListContainer';
import PasswordChangeContainer from '../PasswordChange/PasswordChangeContainer';



class AdminRouter extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/pharmacist/prescriptions" component={PharPrescriptionListContainer} />
                    <Route path="/pharmacist/prescription/:id" component={PharPrescriptionDetailsContainer} />
                    <Route path="/pharmacist/prescription/:id/confirm" component={PharPrescriptionSold} />
                    <Route path="/pharmacist/soldPrescriptions" component={SoldPrescriptionListContainer} />
                    <Route path="/pharmacist/changePassword" component={PasswordChangeContainer} />

                </Switch>
            </div>
        );
    }
}

export default AdminRouter;
