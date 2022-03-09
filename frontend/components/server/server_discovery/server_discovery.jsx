import React, { Component } from "react";
import ServersNav from "../servers_nav";
import ServerDiscoveryBody from "./server_discovery_body";

export default class ServerDiscovery extends Component {
  render() {
    return (
      <div>
        <ServersNav
          enrolledServers={this.props.enrolledServers}
          requestServer={this.props.requestServer}
          fetchChannel={this.props.fetchChannel}
          createServer={this.props.createServer}
          createServerMember={this.props.createServerMember}
          createChannel={this.props.createChannel}
          currentUser={this.props.currentUser}
        />
        <ServerDiscoveryBody
          requestServers={this.props.requestServers}
          servers={this.props.servers}
          createServerMember={this.props.createServerMember}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}
