import React, { Component } from "react";

export default class EditChannelModal extends Component {
  constructor(props) {
    super(props);
    this.state = { channelName: this.props.currentChannel.channelName };
  }

  editFieldHandler(e) {
    this.setState({ channelName: e.target.value });
  }

  submitEditHandler(e) {
    e.preventDefault();
    this.props.currentChannel.channelName = this.state.channelName;
    this.props.updateChannel({
      id: this.props.currentChannel.id,
      channel_name: this.props.currentChannel.channelName,
      server_id: this.props.currentChannel.serverId,
    });
    this.props.toggleEditChannelModal();
  }

  exitModalHandler() {
    this.props.toggleEditChannelModal();
    this.setState({
      channelName: this.props.currentChannel.channelName,
    });
  }

  render() {
    return (
      <div
        className={
          this.props.active ? "edit-channel-modal__bg" : "hide-channel"
        }
        onClick={(e) => this.exitModalHandler(e)}
      >
        <div
          className="edit-channel-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={(e) => this.submitEditHandler(e)}>
            <input
              type="text"
              value={this.state.channelName}
              onChange={(e) => this.editFieldHandler(e)}
            />
            <input
              type="submit"
              value="Submit Edit"
              className="edit-channel-modal__submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
