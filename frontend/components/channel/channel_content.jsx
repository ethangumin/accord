import React from "react";

const ChannelContent = ({ currentChannel }) => {
  return (
    <div className="channel-content__container">
      <div className="channel-content__chat">
        <input
          type="text"
          placeholder={`Message #${currentChannel.channelName}`}
        />
      </div>
      <div className="channel-content__members">
        {/* Placeholder */}
        <h3>ONLINE - 0</h3>
        <div className="channel-content__member">
          {/* <p className="channel-content__member-icon"> */}
          {/* User Icon */}
          {/* </p> */}
          {/* <p>Guest</p> */}
        </div>
      </div>
    </div>
  );
};

export default ChannelContent;
