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
  }

  updateFieldHandler(e) {
    this.setState({ serverName: e.target.value });
  }

  subscribeHandler(e) {
    e.preventDefault();
    this.props.createServerMember({
      user_id: this.props.currentUser.id,
      server_id: this.state.selectedServer.id,
    });
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
          <p>
            {this.state.selectedServer
              ? this.state.selectedServer.serverName
              : ""}
          </p>
          <button onClick={(e) => this.subscribeHandler(e)}>Subscribe</button>
        </div>
      </div>
    );
  }
}

export default ServerDiscoveryBody;
