import React, { Component } from "react";

export default class ServerModal extends Component {
  render() {
    return (
      <div
        className={
          this.props.active === true ? "server-modal__bg" : "server-modal__hide"
        }
        onClick={(e) => this.props.toggleServerModal(e)}
      >
        <div className="server-modal">
          <form>
            <h1>Create a server</h1>
            <p>
              Your server is where you and your friends hang out. Make yours and
              start talking.
            </p>
            <label>SERVER NAME</label>
            <input type="text" placeholder="your server" />
            <button>Create</button>
          </form>
        </div>
      </div>
    );
  }
}
