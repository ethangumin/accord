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
      this.props.history.push("/servers");
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login__modal">
        <h1>Welcome back!</h1>
        <h3>We're so excited to see you again!</h3>
        <form onSubmit={(e) => this.submitHandler(e)}>
          {this.renderErrors()}
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.setFieldHandler("email")}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.setFieldHandler("password")}
            />
          </label>
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
    );
  }
}
