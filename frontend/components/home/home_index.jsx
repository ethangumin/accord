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
    // debugger;
    return (
      <div className="server-index__container">
        <ServersNav
          enrolledServers={this.props.enrolledServers}
          createServer={this.props.createServer}
          createServerMember={this.props.createServerMember}
          createChannel={this.props.createChannel}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
        />
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
