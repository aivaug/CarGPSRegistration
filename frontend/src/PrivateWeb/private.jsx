import * as React from 'react';
import { Route } from 'react-router-dom';

import PrivateNav from './navigation';

import Vehicles from './Vehicle/index';
import VehiclesEdit from './Vehicle/vehicleEdit';

import Users from './User/index';
import NewUser from './User/newUser';

import APIKeys from './APIKeys/index';
import EditAPIKey from './APIKeys/apiKeyEdit';

import MainPage from './main';

const privateWeb = () => (
  <div>
    <PrivateNav />
    <div style={{paddingTop: 100}}>
        <Route exact path={'/pr/main'} component={MainPage} />

        <Route exact path={'/pr/vehicles'} component={Vehicles} />
        <Route path={"/pr/vehicleEdit"} component={VehiclesEdit} />

        <Route exact path={'/pr/users'} component={Users} />
        <Route exact path={'/pr/newUser'} component={NewUser} />

        <Route exact path={'/pr/keys'} component={APIKeys} />
        <Route path={'/pr/keyEdit'} component={EditAPIKey} />
    </div>
  </div>
);

export default privateWeb;