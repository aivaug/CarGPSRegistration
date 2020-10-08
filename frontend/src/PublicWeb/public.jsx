import * as React from 'react';
import { Route } from 'react-router-dom';

import { StaticNav } from './navigation';

import Index from './Index/index';
const StaticLayout = () => (
  <div>
    <StaticNav />
    <Route exact path={'/'} component={Index} />
  </div>
);

export default StaticLayout;