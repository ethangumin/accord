import React from "react";
import ChannelMembers from "./channel_members";
import ChannelMessages from "./channel_messages";

const ChannelContent = ({ currentChannel }) => {
  return (
    <div className="channel-content__container">
      <ChannelMessages currentChannel={currentChannel} />
      <ChannelMembers currentChannel={currentChannel} />
    </div>
  );
};

export default ChannelContent;
