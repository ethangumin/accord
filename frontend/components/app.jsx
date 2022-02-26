import React from "react";
import { Route, Switch } from "react-router-dom";
import SplashContainer from "./splash/splash_container"
import SignUpFormContainer from './login_signup/signup_form_container'
import LoginFormContainer from './login_signup/login_form_container'

const App = () => {
  return (
    <div>
      {/* <SplashContainer /> */}
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
