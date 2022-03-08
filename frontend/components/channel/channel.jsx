import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";
import { withRouter } from "react-router-dom";

class Channel extends React.Component {
  render() {
    // debugger;
    return (
      <div className="channel__container">
        <ChannelNav currentChannel={this.props.currentChannel} />
        <ChannelContent
          currentChannel={this.props.currentChannel}
          receiveMessage={this.props.receiveMessage}
          receiveMessages={this.props.receiveMessages}
          currentUser={this.props.currentUser}
          currentChannelId={this.props.currentChannelId}
          // currentChannelId={this.props.match.params.channelId}
          currentMessages={this.props.currentMessages}
        />
      </div>
    );
  }
}

export default withRouter(Channel);
