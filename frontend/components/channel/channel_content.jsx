import React from "react";
import ChannelMembers from "./channel_members";
import ChannelMessages from "./channel_messages";

const ChannelContent = ({
  currentChannel,
  receiveMessage,
  currentUser,
  currentChannelId,
  receiveMessages,
  currentMessages,
}) => {
  return (
    <div className="channel-content__container">
      <ChannelMessages
        currentChannel={currentChannel}
        receiveMessage={receiveMessage}
        currentUser={currentUser}
        currentChannelId={currentChannelId}
        receiveMessages={receiveMessages}
        currentMessages={currentMessages}
      />
      <ChannelMembers currentChannel={currentChannel} />
    </div>
  );
};

export default ChannelContent;
