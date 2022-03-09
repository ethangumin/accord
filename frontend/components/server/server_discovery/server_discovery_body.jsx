import React from "react";

class ServerDiscoveryBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serverName: "", selectedServer: null };
  }

  componentDidMount() {
    this.props.requestServers();
  }

  fetchServerHandler(e) {
    e.preventDefault();
    const servers = this.props.servers ? this.props.servers : [];
    for (let server of servers) {
      if (server.serverName === this.state.serverName) {
        this.setState({ selectedServer: server });
        break;
      }
    }
    console.log("No server with that name");
  }

  updateFieldHandler(e) {
    this.setState({ serverName: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Find you community on Accord</h1>
        <h3>From gaming, to music, to learning, there's a place for you.</h3>
        <form onSubmit={(e) => this.fetchServerHandler(e)}>
          <input
            type="text"
            placeholder="Explore communities"
            value={this.state.serverName}
            onChange={(e) => this.updateFieldHandler(e)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.state.selectedServer
            ? this.state.selectedServer.serverName
            : ""}
        </div>
      </div>
    );
  }
}

export default ServerDiscoveryBody;
