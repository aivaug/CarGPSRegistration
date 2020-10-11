import React from 'react';
import { Route, Switch } from 'react-router-dom';

import publicLayout from './PublicWeb/public';
import privateLayout from './PrivateWeb/private';
import RequireAuth from './PublicWeb/Auth/RequireAuth';

const Routes = () => (
  <Switch >
    <Route path={'/pr'} component={RequireAuth(privateLayout)} />
    <Route path={'/'} component={publicLayout} />
    <Route component={() => <h1>Not Found</h1>}/>
  </Switch>
)

export default Routes