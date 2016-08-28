import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'

import auth from './utils/auth'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard} onEnter={auth.requireAuth} />
    </Route>
  </Router>
)
