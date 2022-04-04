import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import SignUpFormContainer from "./auth/signup_form_container";
import LoginFormContainer from "./auth/login_form_container";
import HomeIndexContainer from "./home/home_index_container";
import ServerContainer from "./server/server_container";
import ConversationContainer from "./conversation/conversation";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/home" component={HomeIndexContainer} />
        <ProtectedRoute
          exact
          path="/server/:id/channel/:channelId"
          component={ServerContainer}
        />
        <ProtectedRoute
          exact
          path="/conversation/:id"
          component={ConversationContainer}
        />
      </Switch>
    </div>
  );
};

export default App;
