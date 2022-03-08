import React, { Component } from "react";

class ChannelModal extends Component {
  constructor(props) {
    super(props);
    this.state = { channelName: "" };
  }

  exitModalHandler(e) {
    e.preventDefault();
    this.props.toggleChannelModal(e);
  }

  updateChannelNameHandler(e) {
    this.setState({ channelName: e.target.value });
  }

  render() {
    return (
      <div
        className={
          this.props.channelModalActive === true
            ? "channel-modal__bg"
            : "channel-modal__hide"
        }
        onClick={(e) => this.exitModalHandler(e)}
      >
        <div className="channel-modal" onClick={(e) => e.stopPropagation()}>
          <form>
            <h1>Create Text Channel</h1>
            <h3>in Text Channels</h3>
            <label>CHANNEL NAME</label>
            <input
              type="text"
              placeholder="new-channel"
              value={this.state.channelName}
              onChange={(e) => this.updateChannelNameHandler(e)}
            />
            <input
              type="submit"
              value="Create Channel"
              disabled={this.state.channelName.length === 0 ? true : false}
              className={
                this.state.channelName.length === 0
                  ? "channel-modal__submit channel-modal__submit-disabled"
                  : "channel-modal__submit"
              }
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChannelModal;
