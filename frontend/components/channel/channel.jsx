import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";
import { withRouter } from "react-router-dom";

class Channel extends React.Component {
  render() {
    const currentChannel = this.props.currentChannels.find(
      (channel) => channel.id === parseInt(this.props.currentChannelId)
    );

    return (
      <div className="channel__container">
        <ChannelNav currentChannel={currentChannel} />
        <ChannelContent
          currentChannel={currentChannel}
          currentChannels={this.props.currentChannels}
          receiveMessage={this.props.receiveMessage}
          receiveMessages={this.props.receiveMessages}
          currentUser={this.props.currentUser}
          currentChannelId={this.props.match.params.channelId}
          currentMessages={this.props.currentMessages}
        />
      </div>
    );
  }
}

export default withRouter(Channel);
