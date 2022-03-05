import React from "react";
import ServersNav from "./servers_nav";
import ChannelContainer from "../channel/channel_container";
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
          // fetchChannel={this.props.fetchChannel}
          currentServer={this.props.currentServer}
        />
        <ServerChannels
          server={this.props.currentServer}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
          currentChannel={this.props.currentChannel}
          currentChannelId={this.props.currentChannelId}
          currentServer={this.props.currentServer}
        />
        <ChannelContainer
          currentChannel={this.props.currentChannel}
          currentChannelId={this.props.currentChannelId}
        />
      </div>
    );
  }
}

export default Server;
