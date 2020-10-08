import React from 'react';
import { Route, Switch } from 'react-router-dom';

import publicLayout from './PublicWeb/public';
// import AdminLayout from './Components/adminLayout';
// import RequireAuth from './StaticWebsite/Auth/RequireAuth';

const Routes = () => (
  <Switch >
    {/* <Route path="/loggedin" component={RequireAuth(AdminLayout)} /> */}
    <Route path={'/'} component={publicLayout} />
    {/* <Route component={() => <h1>Not Found</h1>}/> */}
  </Switch>
)

export default Routes