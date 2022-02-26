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
    const user = Object.assign({}, this.state);
    this.props.login(user);
    debugger;
    // figure out a way to only redirect to /servers if correct login info
    if (this.props.errors.length === 0) {
      this.props.history.push("/servers");
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
      </div>
    );
  }
}
