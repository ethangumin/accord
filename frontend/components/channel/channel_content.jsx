import React from "react";

const ChannelContent = () => {
  return (
    <div className="channel-content__container"> 
      <div className="channel-content__chat">
        <input type="text" placeholder="Message #General" />
      </div>
      <div className="channel-content__members">
        {/* Placeholder */}
        <p>Online - 1</p>
        <p>Guest</p>
      </div>
    </div>
  );
};

export default ChannelContent;
