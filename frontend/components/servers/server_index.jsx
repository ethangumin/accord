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
      <div>
        <h1>Servers Index</h1>
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
