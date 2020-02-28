import React, { Component } from "react";

import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";
import RTLLayout from "layouts/RTL/RTL.jsx";

import { createBrowserHistory } from "history";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { withAuthentication } from "../Session";

const hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
);

export default withAuthentication(App);
