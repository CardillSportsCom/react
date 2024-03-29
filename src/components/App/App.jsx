import React from "react";

import AuthLayout from "./../../layouts/Auth/Auth.jsx";
import AdminLayout from "./../../layouts/Admin/Admin.jsx";

import { createBrowserHistory } from "history";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { withAuthentication } from "../Session";

const hist = createBrowserHistory();

const App = () => (
  <Router history={hist}>
    <Switch>
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>
);

export default withAuthentication(App);
