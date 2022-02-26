import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import * as SessionApiUtil from "../frontend/util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // window.signup = SessionApiUtil.signup
  // window.login = SessionApiUtil.login;
  // window.logout = SessionApiUtil.logout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to Accord</h1>, root);
});
