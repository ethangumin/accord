import React from "react";
import { Link } from "react-router-dom";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import ChannelModal from "../modals/channel_modal";

class ServerChannels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channelModalActive: false };
    this.toggleChannelModal = this.toggleChannelModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.currentChannelId);
  }

  toggleChannelModal(e) {
    e.preventDefault();
    this.setState({ channelModalActive: !this.state.channelModalActive });
  }

  render() {
    const mapChannelsToServer =
      this.props.server && this.props.server.channels
        ? this.props.server.channels.map((channel) => {
            return (
              <div key={channel.id} className="server-channels__channel">
                <Link
                  to={`/server/${this.props.server.id}/channel/${channel.id}`}
                  onClick={() => this.props.fetchChannel(channel.id)}
                  className={
                    this.props.currentChannel.id === channel.id
                      ? "server-channels__active"
                      : "server-channels__inactive"
                  }
                >
                  <img src={Hashtag} alt="hashtag" className="channel-pound" />
                  <p>{channel.channelName}</p>
                </Link>
              </div>
            );
          })
        : "";

    const createChannelButton =
      this.props.server &&
      this.props.currentUser &&
      this.props.server.creatorId === this.props.currentUser.id ? (
        <p onClick={(e) => this.toggleChannelModal(e)}>+</p>
      ) : (
        <p></p>
      );

    return (
      <div className="server-channels__container">
        <h3 className="server-channels__header">
          {this.props.server ? this.props.server.serverName : ""}
        </h3>
        <div className="server-channels__channels-idx">
          <div>
            <div className="server-channels__text-channels-header">
              <p>TEXT CHANNELS</p>
              {createChannelButton}
              {/* <p onClick={(e) => this.toggleChannelModal(e)}>+</p> */}
            </div>
            <ul>{mapChannelsToServer}</ul>
          </div>
          <div className="server-channels__curr-user">
            <p></p>
            <p>{this.props.currentUser.username}</p>
          </div>
        </div>
        <ChannelModal
          channelModalActive={this.state.channelModalActive}
          toggleChannelModal={this.toggleChannelModal}
          createChannel={this.props.createChannel}
        />
      </div>
    );
  }
}

export default ServerChannels;
