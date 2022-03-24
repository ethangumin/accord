import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import DeleteBtn from "../../../app/assets/images/xmark-solid.svg";
import EditBtn from "../../../app/assets/images/pen-to-square-solid.svg";
import ChannelModal from "../modals/channel_modal";
import EditChannelModal from "../modals/edit_channel_modal";

const ServerChannels = (props) => {
  const [channelModalActive, setChannelModalActive] = useState(false);
  const [editChannelModalActive, setEditChannelModalActive] = useState(false);

  const toggleChannelModal = () => {
    setChannelModalActive(!channelModalActive);
  };

  const toggleEditChannelModal = () => {
    setEditChannelModalActive(!editChannelModalActive);
  };

  const mapChannelsToServer =
    props.server && props.currentChannels
      ? props.currentChannels
          .filter((channel) => channel.serverId === props.server.id)
          .map((channel, index) => {
            return (
              <div
                key={channel.id}
                className={
                  props.currentChannelId === channel.id
                    ? "server-channels__active server-channels__channel"
                    : "server-channels__inactive server-channels__channel"
                }
              >
                <Link
                  to={`/server/${props.server.id}/channel/${channel.id}`}
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
                      props
                        .deleteChannel(channel.id)
                        .then(() =>
                          props.history.push(
                            `/server/${props.server.id}/channel/${
                              props.currentChannels.find(
                                (channel) =>
                                  channel.server_id === props.serverId
                              ).id
                            }`
                          )
                        )
                    }
                    className={
                      index === 0 ||
                      props.currentUser.id !== props.server.creatorId
                        ? "hide-channel"
                        : "delete-channel-btn"
                    }
                  />
                  <img
                    src={EditBtn}
                    alt="edit channel"
                    className={
                      props.currentUser.id !== props.server.creatorId
                        ? "hide-channel"
                        : "edit-channel-btn"
                    }
                    onClick={() => toggleEditChannelModal()}
                  />
                </div>
                <EditChannelModal
                  currentChannel={channel}
                  updateChannel={props.updateChannel}
                  currentUserId={props.currentUser.id}
                  serverCreatorId={props.server.creatorId}
                  toggleEditChannelModal={toggleEditChannelModal}
                  active={editChannelModalActive}
                />
              </div>
            );
          })
      : "";

  const createChannelButton =
    props.server &&
    props.currentUser &&
    props.server.creatorId === props.currentUser.id ? (
      <p onClick={(e) => toggleChannelModal(e)}>+</p>
    ) : (
      <p></p>
    );

  return (
    <div className="server-channels__container">
      <h3 className="server-channels__header">
        {props.server ? props.server.serverName : ""}
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
          <p>{props.currentUser.username}</p>
        </div>
      </div>
      <ChannelModal
        channelModalActive={channelModalActive}
        toggleChannelModal={toggleChannelModal}
        createChannel={props.createChannel}
      />
    </div>
  );
};

export default withRouter(ServerChannels);
