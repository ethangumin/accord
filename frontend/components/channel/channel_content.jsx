import React from "react";
import ChannelContentMembers from "./channel_content_members";
import ChannelContentMessages from "./channel_content_messages";

const ChannelContent = ({ currentChannel }) => {
  return (
    <div className="channel-content__container">
      <ChannelContentMessages currentChannel={currentChannel} />
      <ChannelContentMembers />
    </div>
  );
};

export default ChannelContent;
