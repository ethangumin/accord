import React from "react";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <div className="server-index__container">
          <div>Servers Container</div>
          <div>Direct Messages Container</div>
          <div>
            <div>Home Nav</div>
            <div>Home Content</div>
          </div>
        </div>
        <h1>Servers Index</h1>
        <h2>Hello {this.props.currentUser.username}</h2>
        <input
          type="button"
          value="Logout"
          onClick={(e) => this.logoutHandler(e)}
        />
      </div>
    );
  }
}

export default ServerIndex;
