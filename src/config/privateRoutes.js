import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "../components/Permission/Authentication";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props => (
      isAuthenticated() ? <Component {...props} /> : <Redirect to={{ pathname: "/", state: { from: props.location }}} />
    )}
  />
);

export default PrivateRoute;
