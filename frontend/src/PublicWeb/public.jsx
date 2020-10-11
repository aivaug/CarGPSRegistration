import * as React from 'react';
import { Route } from 'react-router-dom';

import { StaticNav } from './navigation';

import Index from './Index/index';
import Login from './Auth/Login';

const publicWeb = () => (
  <div>
    <StaticNav />
    <div style={{paddingTop: 50}}>
      <Route exact path={'/'} component={Index} />
      <Route exact path={'/login'} component={Login} />
    </div>
  </div>
);

export default publicWeb;