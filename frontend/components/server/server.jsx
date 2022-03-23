import React from "react";
import ServersNav from "./servers_nav";
import ChannelContainer from "../channel/channel_container";
import ServerChannels from "./server_channels";

class Server extends React.Component {
  componentDidMount() {
    debugger;
    this.props.requestServer(this.props.match.params.id);
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="server__main-container">
        <ServersNav
          enrolledServers={this.props.enrolledServers}
          requestServer={this.props.requestServer}
          fetchChannel={this.props.fetchChannel}
          currentServer={this.props.currentServer}
          createServer={this.props.createServer}
          createServerMember={this.props.createServerMember}
          createChannel={this.props.createChannel}
          currentUser={this.props.currentUser}
          currentChannels={this.props.currentChannels}
        />
        <ServerChannels
          currentChannels={this.props.currentChannels}
          server={this.props.currentServer}
          currentUser={this.props.currentUser}
          fetchChannel={this.props.fetchChannel}
          currentChannel={this.props.currentChannel}
          currentChannelId={this.props.currentChannelId}
          currentServer={this.props.currentServer}
          createChannel={this.props.createChannel}
          deleteChannel={this.props.deleteChannel}
          updateChannel={this.props.updateChannel}
        />
        <ChannelContainer
          currentChannel={this.props.currentChannel}
          currentChannels={this.props.currentChannels}
          currentChannelId={this.props.currentChannelId}
        />
      </div>
    );
  }
}

export default Server;
