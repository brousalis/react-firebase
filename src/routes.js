import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './containers/App';

import Login from "./components/auth/Login";
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
import Dashboard from './components/secure/Dashboard';
import Home from "./components/Home";

import requireAuth from './utils/authenticated';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
);
