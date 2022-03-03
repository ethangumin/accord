import React from "react";
import ServersNav from "../servers/servers_nav";
import Channel from "../channel/channel";
import ServerChannels from "./server_channels";

class Server extends React.Component {
  componentDidMount() {
    this.props
      .requestServer(this.props.match.params.id)
      .then(() =>
        this.props.fetchChannel(this.props.currentServer.channels[0].id)
      );
  }

  render() {
    return (
      <div className="server__main-container">
        <ServersNav
          enrolledServers={this.props.enrolledServers}
          requestServer={this.props.requestServer}
          fetchChannel={this.props.fetchChannel}
          currentServer={this.props.currentServer}
        />
        <ServerChannels
          server={this.props.currentServer}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
          currentChannel={this.props.currentChannel}
          currentServer={this.props.currentServer}
        />
        <Channel currentChannel={this.props.currentChannel} />
      </div>
    );
  }
}

export default Server;
