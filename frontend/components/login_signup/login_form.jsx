import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    const loggedIn = this.props.login(this.state);
    if (loggedIn) {
      return <Redirect to="/servers" />;
    }
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
        <form onSubmit={(e) => this.submitHandler(e)}>
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
      </div>
    );
  }
}
