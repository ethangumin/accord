import React from "react";
import ServersNav from "../servers/servers_nav";
import Channel from "../channel/channel";
import ServerChannelsContainer from "./server_channels_container";
import ServerChannels from "./server_channels";

class Server extends React.Component {
  componentDidMount() {
    this.props.requestServer(this.props.match.params.id);
  }

  render() {
    return (
      <div className="server__main-container">
        <ServersNav
          enrolledServers={this.props.enrolledServers}
          requestServer={this.props.requestServer}
        />
        {/* <ServerChannelsContainer
          server={this.props.currentServer}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
        /> */}
        <ServerChannels
          server={this.props.currentServer}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
          currentChannel={this.props.currentChannel}
        />
        <Channel />
      </div>
    );
  }
}

export default Server;
