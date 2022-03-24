import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteChannel } from "../../actions/channel_actions";

const EditChannelModal = (props) => {
  const dispatch = useDispatch();

  const [channelName, setChannelName] = useState(
    props.currentChannel.channelName
  );

  const deleteChannelHandler = (e) => {
    e.preventDefault();
    dispatch(deleteChannel(props.currentChannel.id));
    props.toggleEditChannelModal();
    // REDIRECT USER TO PREV OR NEXT CHANNEL ON DELETE
  };

  const editFieldHandler = (e) => {
    setChannelName(e.target.value);
  };

  const submitEditHandler = (e) => {
    e.preventDefault();
    props.currentChannel.channelName = channelName;
    props.updateChannel({
      id: props.currentChannel.id,
      channel_name: props.currentChannel.channelName,
      server_id: props.currentChannel.serverId,
    });
    props.toggleEditChannelModal();
  };

  const exitModalHandler = () => {
    props.toggleEditChannelModal();
    setChannelName(props.currentChannel.channelName);
  };

  return (
    <div
      className={props.active ? "edit-channel-modal__bg" : "hide-channel"}
      onClick={(e) => exitModalHandler(e)}
    >
      <div className="edit-channel-modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={(e) => submitEditHandler(e)}>
          <input
            type="text"
            value={channelName}
            onChange={(e) => editFieldHandler(e)}
          />
          <input
            type="submit"
            value="Submit Edit"
            className="edit-channel-modal__submit"
          />
        </form>
        {props.currentChannels.filter(
          (channel) => channel.serverId === props.currentServer.id
        ).length !== 1 ? (
          <input
            type="button"
            value="Delete Channel"
            onClick={(e) => deleteChannelHandler(e)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EditChannelModal;
