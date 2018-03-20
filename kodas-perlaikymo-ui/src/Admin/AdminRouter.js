import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import RegisterProvider from "./Registration/RegisterProvider";
import RegisterService from "./Registration/RegisterService";
import ServiceList from "./Lists/ServiceList";


  class AdminRouter extends Component {
      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/admin/register/provider" component={RegisterProvider} />
              <Route exact path="/admin/register/service" component={RegisterService} />
                <Route exact path="/admin/services" component={ServiceList} />
            </Switch>
          </div>
        );
      }
    }

  export default AdminRouter;
