import React from "react";

function ServerNavItemBubble({ serverName, serverBubbleActive }) {
  return (
    <div
      className={
        serverBubbleActive
          ? "server-nav-item-bubble"
          : "server-nav-item-bubble-hidden"
      }
    >
      {serverName}
    </div>
  );
}

export default ServerNavItemBubble;
