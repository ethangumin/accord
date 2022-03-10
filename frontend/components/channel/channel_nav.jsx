import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";

const ChannelNav = ({ currentChannel }) => {
  return (
    <div className="channel-nav__container">
      <img src={Hashtag} alt="hashtag" className="channel-pound" />
      <p>{currentChannel ? currentChannel.channelName : ""}</p>
    </div>
  );
};

export default ChannelNav;
