import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteChannel } from "../../actions/channel_actions";

const EditChannelModal = (props) => {
  const dispatch = useDispatch();

  const [channelName, setChannelName] = useState(
    props.currentChannel ? props.currentChannel.channelName : ""
  );

  const currentChannels = props.currentChannels.filter(
    (channel) => channel.serverId === props.currentServer?.id
  );

  useEffect(() => {
    if (props.currentChannel) {
      setChannelName(props.currentChannel.channelName);
    }
  }, [props.currentChannel]);

  const deleteChannelHandler = (e, currentChannels) => {
    e.preventDefault();
    dispatch(deleteChannel(props.currentChannel.id));
    props.toggleEditChannelModal();
    if (parseInt(props.match.params.channelId) === props.currentChannel.id) {
      props.history.push(
        `/server/${props.match.params.id}/channel/${currentChannels[0].id}`
      );
    }
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
        {currentChannels.length !== 1 &&
        currentChannels[0] !== props.currentChannel ? (
          <input
            className="delete-channel-btn"
            type="button"
            value="Delete Channel"
            onClick={(e) => deleteChannelHandler(e, currentChannels)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default withRouter(EditChannelModal);
