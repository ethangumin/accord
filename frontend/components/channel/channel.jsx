import React from "react";
import ChannelNav from "./channel_nav";
import ChannelContent from "./channel_content";

const Channel = () => {
  return (
    <div className="channel__container">
      <ChannelNav />
      <ChannelContent />
    </div>
  );
};

export default Channel;
