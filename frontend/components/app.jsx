import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import SignUpFormContainer from "./login_signup/signup_form_container";
import LoginFormContainer from "./login_signup/login_form_container";
import ServerIndexContainer from "./servers/server_index_container";

const App = () => {
  return (
    <div>
      {/* <SplashContainer /> */}
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/servers" component={ServerIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
