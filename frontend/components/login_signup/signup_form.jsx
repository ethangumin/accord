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

  componentDidUpdate() {
    if (this.props.activeUser) {
      this.props.history.push("/servers");
    }
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.signup(this.state);
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
      <div className="signup__modal-bg">
        <div className="signup__modal">
          <div className="signup__modal-content">
            <h1>Create an account</h1>
            <form onSubmit={(e) => this.submitHandler(e)}>
              {this.renderErrors()}
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.setFieldHandler("email")}
              />
              <label>Username</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.setFieldHandler("username")}
              />
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.setFieldHandler("password")}
              />
              <input type="submit" value="Continue" />
            </form>
            <Link to={"/login"}>Already have an account?</Link>
          </div>
        </div>
      </div>
    );
  }
}
