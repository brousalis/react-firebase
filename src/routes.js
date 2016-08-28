import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'

import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'

import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'

import requireAuth from './utils/auth'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
)
