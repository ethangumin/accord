import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ServerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { serverName: `${this.props.currentUser.username}'s Server` };
    this.createServerHandler = this.createServerHandler.bind(this);
  }

  createServerHandler(e) {
    e.preventDefault();
    this.props
      .createServer({ server_name: this.state.serverName })
      .then((server) => {
        this.props.createServerMember({ server_id: server.server.id });
        this.props.history.push(
          `/server/${server.server.id}/channel/${server.server.channels[0].id}`
        );
      });
    this.props.toggleServerModal(e);
    this.setState({
      serverName: `${this.props.currentUser.username}'s Server`,
    });
  }

  exitModalHandler(e) {
    e.preventDefault();
    this.props.toggleServerModal(e);
    this.setState({
      serverName: `${this.props.currentUser.username}'s Server`,
    });
  }

  render() {
    return (
      <div
        className={
          this.props.active === true ? "server-modal__bg" : "server-modal__hide"
        }
        onClick={(e) => this.exitModalHandler(e)}
      >
        <div className="server-modal" onClick={(e) => e.stopPropagation()}>
          <form
            onSubmit={(e) => this.createServerHandler(e)}
            className="server-modal__content"
          >
            <h1>Create a server</h1>
            <p>
              Your server is where you and your friends hang out. Make yours and
              start talking.
            </p>
            <label>SERVER NAME</label>
            <input
              type="text"
              value={this.state.serverName}
              onChange={(e) => this.setState({ serverName: e.target.value })}
            />
            <div className="server-modal__submit">
              <input type="submit" value="Create" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ServerModal);
