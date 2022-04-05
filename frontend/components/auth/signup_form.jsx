import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  componentDidUpdate() {
    if (this.props.activeUser) {
      this.props.history.push("/home");
    }
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  setFieldHandler(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  errors() {
    return this.props.errors.length > 0;
  }

  render() {
    return (
      <div className="signup__modal-bg">
        <div className="signup__modal">
          <div className="signup__modal-content">
            <h1>Create an account</h1>
            <form onSubmit={(e) => this.submitHandler(e)}>
              <label
                className={this.errors() ? "login-signup-invalid__label" : ""}
              >
                Email{" "}
                {this.errors() ? "- Email/Username/Password is invalid." : ""}
              </label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.setFieldHandler("email")}
                className={
                  this.errors()
                    ? "login-signup-invalid__input signup__input"
                    : "signup__input"
                }
              />
              <label
                className={this.errors() ? "login-signup-invalid__label" : ""}
              >
                Username{" "}
                {this.errors() ? "- Email/Username/Password is invalid." : ""}
              </label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.setFieldHandler("username")}
                className={
                  this.errors()
                    ? "login-signup-invalid__input signup__input"
                    : "signup__input"
                }
              />
              <label
                className={this.errors() ? "login-signup-invalid__label" : ""}
              >
                Password{" "}
                {this.errors() ? "- Email/Username/Password is invalid." : ""}
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.setFieldHandler("password")}
                className={
                  this.errors()
                    ? "login-signup-invalid__input signup__input"
                    : "signup__input"
                }
              />
              <input
                type="submit"
                value="Continue"
                onClick={(e) => this.submitHandler(e)}
              />
            </form>
            <Link to={"/login"}>Already have an account?</Link>
          </div>
        </div>
      </div>
    );
  }
}
