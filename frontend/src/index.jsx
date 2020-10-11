import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './Utils/store';
import Routes from './routes';
import history from './Utils/history';

const App = () => (
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));