import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";
import Gear from "../../../app/assets/images/gear-solid.svg";
import ChannelModal from "../modals/channel_modal";
import EditChannelModal from "../modals/edit_channel_modal";

const ServerChannels = (props) => {
  const [channelModalActive, setChannelModalActive] = useState(false);
  const [editChannelModalActive, setEditChannelModalActive] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState();
  const [generalChannel, setGeneralChannel] = useState();

  const toggleChannelModal = () => {
    setChannelModalActive(!channelModalActive);
  };

  const toggleEditChannelModal = (channel) => {
    setEditChannelModalActive(!editChannelModalActive);
    setSelectedChannel(channel);
  };

  const mapChannelsToServer =
    props.server && props.currentChannels
      ? props.currentChannels
          .filter((channel) => channel.serverId === props.server.id)
          .map((channel, index) => {
            if (index === 0 && !generalChannel) setGeneralChannel(channel);

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
                    src={Gear}
                    alt="edit channel"
                    className={
                      props.currentUser.id !== props.server.creatorId
                        ? "hide-channel"
                        : "edit-channel-btn"
                    }
                    onClick={() => toggleEditChannelModal(channel)}
                  />
                </div>
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
      <EditChannelModal
        generalChannel={generalChannel}
        currentChannel={selectedChannel}
        updateChannel={props.updateChannel}
        currentUserId={props.currentUser.id}
        currentServer={props.server}
        currentChannels={props.currentChannels}
        toggleEditChannelModal={toggleEditChannelModal}
        active={editChannelModalActive}
      />
    </div>
  );
};

export default withRouter(ServerChannels);
