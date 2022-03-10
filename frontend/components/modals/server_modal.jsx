import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ServerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverName: this.props.currentUser
        ? `${this.props.currentUser.username}'s Server`
        : "",
    };
    this.createServerHandler = this.createServerHandler.bind(this);
  }

  createServerHandler(e) {
    e.preventDefault();
    this.props
      .createServer({ server_name: this.state.serverName })
      .then((data) => {
        this.props.history.push(
          `/server/${data.data.server.id}/channel/${data.data.channel.id}`
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
              <input
                type="submit"
                value="Create"
                disabled={this.state.serverName.length === 0 ? true : false}
                className={
                  this.state.serverName.length === 0
                    ? "server-modal__submit-btn server-modal__submit-disabled"
                    : "server-modal__submit-btn"
                }
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ServerModal);