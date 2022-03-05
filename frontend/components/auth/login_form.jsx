import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.loginGuestHandler = this.loginGuestHandler.bind(this);
  }

  componentDidUpdate() {
    if (this.props.activeUser) {
      this.props.history.push("/home");
    }
  }

  loginGuestHandler(e) {
    e.preventDefault();
    this.props.login({ email: "guest@gmail.com", password: "password" });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  setFieldHandler(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  errors() {
    return this.props.errors.length > 0;
  }

  render() {
    return (
      <div className="login__modal-bg">
        <div className="login__modal">
          <div className="login__modal-content">
            <h1>Welcome back!</h1>
            <h3>We're so excited to see you again!</h3>
            <form onSubmit={(e) => this.submitHandler(e)}>
              <label
                className={this.errors() ? "login-signup-invalid__label" : ""}
              >
                EMAIL {this.errors() ? "- Email or password is invalid." : ""}
              </label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.setFieldHandler("email")}
                className={
                  this.errors()
                    ? "login-signup-invalid__input login__input"
                    : "login__input"
                }
              />
              <label
                className={this.errors() ? "login-signup-invalid__label" : ""}
              >
                PASSWORD{" "}
                {this.errors() ? "- Email or password is invalid." : ""}
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.setFieldHandler("password")}
                className={this.errors() ? "login-signup-invalid__input login__input" : "login__input"}
              />
              <input type="submit" value="Login" />
            </form>
            <p>
              Need an account? <Link to={"/signup"}>Register</Link>
            </p>
            <input
              type="button"
              value="Sign in as guest"
              onClick={(e) => this.loginGuestHandler(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}
