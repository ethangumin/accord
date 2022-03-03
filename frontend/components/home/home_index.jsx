import React from "react";
import HomeContent from "./home_content";
import HomeNav from "./home_nav";
import ServersNav from "../server/servers_nav";
import DmIndex from "./dm/dm_index";

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="server-index__container">
        <ServersNav enrolledServers={this.props.enrolledServers} />
        <DmIndex
          friends={this.props.friends}
          currentUser={this.props.currentUser}
        />
        <div className="server-index__home">
          <HomeNav logout={this.props.logout} history={this.props.history} />
          <HomeContent />
        </div>
      </div>
    );
  }
}

export default HomeIndex;
