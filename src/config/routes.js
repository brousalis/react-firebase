var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Register = require('../components/auth/Register');
var Login = require("../components/auth/Login");
var Logout = require('../components/auth/Logout');
var Dashboard = require('../components/secure/Dashboard');
var Home = require("../components/Home");
var requireAuth = require('../utils/authenticated')

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;
