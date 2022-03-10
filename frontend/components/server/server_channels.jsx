import React from "react";
import { Link, withRouter } from "react-router-dom";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import DeleteBtn from "../../../app/assets/images/xmark-solid.svg";
import EditBtn from "../../../app/assets/images/pen-to-square-solid.svg";
import ChannelModal from "../modals/channel_modal";
import EditChannelModal from "../modals/edit_channel_modal";

class ServerChannels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channelModalActive: false, editChannelModalActive: false };
    this.toggleChannelModal = this.toggleChannelModal.bind(this);
    this.toggleEditChannelModal = this.toggleEditChannelModal.bind(this);
  }

  toggleChannelModal() {
    this.setState({ channelModalActive: !this.state.channelModalActive });
  }

  toggleEditChannelModal() {
    this.setState({
      editChannelModalActive: !this.state.editChannelModalActive,
    });
  }

  render() {
    const mapChannelsToServer =
      this.props.server && this.props.currentChannels
        ? this.props.currentChannels
            .filter((channel) => channel.serverId === this.props.server.id)
            .map((channel, index) => {
              return (
                <div
                  key={channel.id}
                  className={
                    this.props.currentChannelId === channel.id
                      ? "server-channels__active server-channels__channel"
                      : "server-channels__inactive server-channels__channel"
                  }
                >
                  <Link
                    to={`/server/${this.props.server.id}/channel/${channel.id}`}
                    className="server-channels__route"
                  >
                    <div className="server-channels__name-hash">
                      <img
                        src={Hashtag}
                        alt="hashtag"
                        className="channel-pound"
                      />
                      <p>{channel.channelName}</p>
                    </div>
                  </Link>
                  <div>
                    <img
                      src={DeleteBtn}
                      alt="delete channel button"
                      onClick={() =>
                        this.props
                          .deleteChannel(channel.id)
                          .then(() =>
                            this.props.history.push(
                              `/server/${this.props.server.id}/channel/${
                                this.props.currentChannels.find(
                                  (channel) =>
                                    channel.server_id === this.props.serverId
                                ).id
                              }`
                            )
                          )
                      }
                      className={
                        index === 0 ||
                        this.props.currentUser.id !==
                          this.props.server.creatorId
                          ? "hide-channel"
                          : "delete-channel-btn"
                      }
                    />
                    <img
                      src={EditBtn}
                      alt="edit channel"
                      className={
                        this.props.currentUser.id !==
                        this.props.server.creatorId
                          ? "hide-channel"
                          : "edit-channel-btn"
                      }
                      onClick={() => this.toggleEditChannelModal()}
                    />
                  </div>
                  <EditChannelModal
                    currentChannel={channel}
                    updateChannel={this.props.updateChannel}
                    currentUserId={this.props.currentUser.id}
                    serverCreatorId={this.props.server.creatorId}
                    toggleEditChannelModal={this.toggleEditChannelModal}
                    active={this.state.editChannelModalActive}
                  />
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

export default withRouter(ServerChannels);
