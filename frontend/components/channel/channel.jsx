import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";
import { withRouter } from "react-router-dom";

class Channel extends React.Component {
  render() {
    // debugger;
    const currentChannel = this.props.currentChannels.find(
      (channel) => channel.id === parseInt(this.props.currentChannelId)
    );

    return (
      <div className="channel__container">
        <ChannelNav
          // currentChannelId={parseInt(this.props.match.params.channelId)}
          // currentChannels={this.props.currentChannels}
          currentChannel={currentChannel}
        />
        <ChannelContent
          currentChannel={currentChannel}
          // currentChannel={this.props.currentChannel}
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
