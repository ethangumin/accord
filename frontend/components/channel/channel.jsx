import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";

class Channel extends React.Component {
  render() {
    return (
      <div className="channel__container">
        <ChannelNav currentChannel={this.props.currentChannel} />
        <ChannelContent
          currentChannel={this.props.currentChannel}
          receiveMessage={this.props.receiveMessage}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default Channel;
