import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";

class ServerChannels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.server) {
      for (let channel of this.props.server.channels) {
        if (channel.id === prevProps.currentChannel.id) return;
      }
      this.props.fetchChannel(this.props.server.channels[0].id);
    } else {
      return;
    }
  }

  render() {
    const mapChannelsToServer = this.props.server
      ? this.props.server.channels.map((channel) => {
          return (
            <li
              key={channel.id}
              onClick={() => this.props.fetchChannel(channel.id)}
              className={
                this.props.currentChannel.id === channel.id
                  ? "server-channels__active"
                  : "server-channels__inactive"
              }
            >
              <img src={Hashtag} alt="hashtag" className="channel-pound" />
              <p>{channel.channelName}</p>
            </li>
          );
        })
      : "";

    return (
      <div className="server-channels__container">
        <h3 className="server-channels__header">
          {this.props.server ? this.props.server.serverName : ""}
        </h3>
        <div className="server-channels__channels-idx">
          <ul>{mapChannelsToServer}</ul>
          <div className="server-channels__curr-user">
            <p></p>
            <p>{this.props.currentUser.username}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServerChannels;
