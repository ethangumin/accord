import React from "react";
import At from "../../../app/assets/images/at-solid.svg";

const ConversationHeader = (props) => {
  return (
    <div className="channel-nav__container" style={{height: "5vh"}}>
      <div className="channel-nav__channel-name">
        <img src={At} alt="conversation at" className="channel-pound" />
        <p style={{paddingTop: "0"}}>{props.friend?.username}</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
