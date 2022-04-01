import React from "react";

function ServerNavItemBubble(props) {
  return (
    <div
      className={
        props.serverBubbleActive && props.bubbleServer === props.server
          ? "server-nav-item-bubble"
          : "server-nav-item-bubble-hidden"
      }
    >
      {props.server.serverName}
    </div>
  );
}

export default ServerNavItemBubble;
