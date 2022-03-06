import React, { Component } from "react";

export default class ServerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { serverName: "" };
  }

  createServerHandler(e) {
    // debugger;
    e.preventDefault();
    this.props
      .createServer({ server_name: this.state.serverName })
      .then((server) => {
        // debugger;
        this.props.createServerMember({ server_id: server.server.id });
        this.props.createChannel({
          channel_name: "General",
          server_id: server.server.id,
        });
      });
    this.props.toggleServerModal(e);
    this.setState({ serverName: "" });
  }

  render() {
    return (
      <div
        className={
          this.props.active === true ? "server-modal__bg" : "server-modal__hide"
        }
        onClick={(e) => this.props.toggleServerModal(e)}
      >
        <div className="server-modal" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={(e) => this.createServerHandler(e)}>
            <h1>Create a server</h1>
            <p>
              Your server is where you and your friends hang out. Make yours and
              start talking.
            </p>
            <label>SERVER NAME</label>
            <input
              type="text"
              placeholder="your server"
              value={this.state.serverName}
              onChange={(e) => this.setState({ serverName: e.target.value })}
            />
            <input type="submit" value="Create" />
          </form>
        </div>
      </div>
    );
  }
}
