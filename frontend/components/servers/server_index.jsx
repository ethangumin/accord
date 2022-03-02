import React from "react";
import HomeContent from "./home_content";
import HomeNav from "./home_nav";
import ServersNav from "./servers_nav";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="server-index__container">
        <div className="server-index__servers-nav">
          <ServersNav servers={this.props.currentUser.servers} />
        </div>
        <div className="server-index__dm">Direct Messages Container</div>
        <div className="server-index__home">
          <div className="server-index__home__nav">
            <HomeNav logout={this.props.logout} history={this.props.history} />
          </div>
          <div className="server-index__home__content">
            <HomeContent />
          </div>
        </div>
        {/* <h1>Servers Index</h1>
        <h2>Hello {this.props.currentUser.username}</h2>
        <input
          type="button"
          value="Logout"
          onClick={(e) => this.logoutHandler(e)}
        /> */}
      </div>
    );
  }
}

export default ServerIndex;
