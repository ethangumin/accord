import React from "react";
import ChannelMembers from "./channel_members";
import ChannelMessages from "./channel_messages";

const ChannelContent = ({
  currentChannel,
  receiveMessage,
  currentUser,
  currentChannelId,
}) => {
  return (
    <div className="channel-content__container">
      <ChannelMessages
        currentChannel={currentChannel}
        receiveMessage={receiveMessage}
        currentUser={currentUser}
        currentChannelId={currentChannelId}
      />
      <ChannelMembers currentChannel={currentChannel} />
    </div>
  );
};

export default ChannelContent;
