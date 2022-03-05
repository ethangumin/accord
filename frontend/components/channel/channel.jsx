import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";

class Channel extends React.Component {
  render() {
    // debugger;
    return (
      <div className="channel__container">
        <ChannelNav currentChannel={this.props.currentChannel} />
        <ChannelContent
          currentChannel={this.props.currentChannel}
          receiveMessage={this.props.receiveMessage}
          currentUser={this.props.currentUser}
          currentChannelId={this.props.currentChannelId}
        />
      </div>
    );
  }
}

export default Channel;
