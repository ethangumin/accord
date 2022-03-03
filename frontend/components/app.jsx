import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import SignUpFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";
import HomeIndexContainer from "./home/home_index_container";
import ServerContainer from "./server/server_container"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/servers" component={HomeIndexContainer} />
        <Route path="/server/:id" component={ServerContainer} />
      </Switch>
    </div>
  );
};

export default App;
