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
  }

  render() {
    return (
      <div
        // className="edit-channel-modal__bg"
        className={
          this.props.currentUserId !== this.props.serverCreatorId
            ? "hide-channel"
            : "edit-channel-modal__bg"
        }
      >
        <div className="edit-channel-modal">
          <form onSubmit={(e) => this.submitEditHandler(e)}>
            <input
              type="text"
              value={this.state.channelName}
              onChange={(e) => this.editFieldHandler(e)}
            />
            <input type="submit" value="Submit Edit" />
          </form>
        </div>
      </div>
    );
  }
}
