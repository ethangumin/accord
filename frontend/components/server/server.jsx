import React from "react";
import ServersNav from "../servers/servers_nav";
import Channel from "../channel/channel"
import ServerChannels from "./server_channels";

class Server extends React.Component {
  componentDidMount() {
    this.props.requestServer(this.props.match.params.id);
  }

  render() {
    return (
      <div className="server__main-container">
        <ServersNav enrolledServers={this.props.enrolledServers} />
        <ServerChannels server={this.props.currentServer} />
        <Channel />
      </div>
    );
  }
}

export default Server;
