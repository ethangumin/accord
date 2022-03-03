import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";

const Channel = ({ currentChannel }) => {
  return (
    <div className="channel__container">
      <ChannelNav currentChannel={currentChannel} />
      <ChannelContent currentChannel={currentChannel} />
    </div>
  );
};

export default Channel;
