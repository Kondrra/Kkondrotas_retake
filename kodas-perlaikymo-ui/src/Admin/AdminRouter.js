import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import RegisterAdmin from './Registration/RegisterAdmin';
import RegisterDoctor from './Registration/RegisterDoctor';
import RegisterPatient from './Registration/RegisterPatient';
import RegisterPharmacist from './Registration/RegisterPharmacist';
import AdminList from './Lists/AdminList';
import DoctorList from './Lists/DoctorList';
import PatientList from './Lists/PatientList';
import PharmacistList from './Lists/PharmacistList';
import AdminDetailsContainer from './Details/AdminDetailsContainer';
import DoctorDetailsContainer from './Details/DoctorDetailsContainer';
import PatientDetailsContainer from './Details/PatientDetailsContainer';
import PharmacistDetailsContainer from './Details/PharmacistDetailsContainer';
import AssignDoctor from './Assign/AssignDoctor';
import AssignDoctorToPatient from './Assign/AssignDoctorToPatient';
import AdminEditContainer from './Registration/AdminEditContainer';
import DoctorEditContainer from './Registration/DoctorEditContainer';
import PatientEditContainer from './Registration/PatientEditContainer';
import PharmacistEditContainer from './Registration/PharmacistEditContainer';
import PasswordChangeContainer from '../PasswordChange/PasswordChangeContainer';


  class AdminRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/admin/register/admin" component={RegisterAdmin} />
              <Route exact path="/admin/admins" component={AdminList} />
              <Route exact path="/admin/admin/:id" component={AdminDetailsContainer} />
              <Route exact path="/admin/admin/edit/:id" component={AdminEditContainer} />
              <Route exact path="/admin/changePassword" component={PasswordChangeContainer} />


              <Route exact path="/admin/register/doctor" component={RegisterDoctor} />
              <Route exact path="/admin/doctors" component={DoctorList} />
              <Route exact path="/admin/doctor/:id" component={DoctorDetailsContainer} />
              <Route exact path="/admin/doctor/edit/:id" component={DoctorEditContainer} />

              <Route exact path="/admin/register/patient" component={RegisterPatient} />
              <Route exact path="/admin/patients" component={PatientList} />
              <Route exact path="/admin/patient/:id" component={PatientDetailsContainer} />
              <Route exact path="/admin/patient/edit/:id" component={PatientEditContainer} />
              <Route exact path="/admin/patient/confirm/:id" component={AssignDoctor} />
              <Route exact path="/admin/patient/assign/:id" component={AssignDoctorToPatient} />


              <Route exact path="/admin/register/pharmacist" component={RegisterPharmacist} />
              <Route exact path="/admin/pharmacists" component={PharmacistList} />
              <Route exact path="/admin/pharmacist/:id" component={PharmacistDetailsContainer} />
              <Route exact path="/admin/pharmacist/edit/:id" component={PharmacistEditContainer} />

            </Switch>
          </div>
        );
      }
    }

  export default AdminRouter;
