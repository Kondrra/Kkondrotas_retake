import React, { Component } from 'react';
import PatientNavbar from './NavBar/PatientNavbar';
import PatientRouter from './PatientRouter';


  class PatientContainer extends Component {


      render(){
        return(
          <div className="container">
            <PatientNavbar />
            <div className="row">
              <div className="col-md-12">
                <PatientRouter />
              </div>
            </div>
          </div>
        );
      }
    }

  export default PatientContainer;
