import React, { Component } from "react";

export default class ChannelContentMessages extends Component {
  render() {
    return (
      <div className="channel-messages__container">
        <input
          type="text"
          placeholder={`Message #${this.props.currentChannel.channelName}`}
        />
      </div>
    );
  }
}
