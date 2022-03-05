import React from 'react';
import { connect } from "react-redux";
import { Redirect, withRouter, Route } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/home" />
    }
  />
);

const mSTP = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
