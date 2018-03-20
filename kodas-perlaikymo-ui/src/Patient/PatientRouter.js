import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import PatientPrescriptions from './Prescriptions/PatientPrescriptions';
import PatientRecords from './Records/PatientRecords';
import PatientPrescriptionDetails from './PrescriptionDetails/PatientPrescriptionDetails';
import PatientProfileContainer from './PatientProfile/PatientProfileContainer';
import PatientRecordDetails from './RecordDetails/PatientRecordDetails';
import PasswordChangeContainer from '../PasswordChange/PasswordChangeContainer';


  class PatientRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route path="/patient/prescriptions" component={PatientPrescriptions} />
              <Route path="/patient/prescription/:id" component={PatientPrescriptionDetails} />
              <Route path="/patient/records" component={PatientRecords} />
              <Route path="/patient/record/:id" component={PatientRecordDetails} />
              <Route path="/patient/details" component={PatientProfileContainer} />
              <Route path="/patient/changePassword" component={PasswordChangeContainer} />
            </Switch>
          </div>
        );
      }
    }

  export default PatientRouter;
