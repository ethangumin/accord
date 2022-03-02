import React from "react";

const ServerChannels = ({server}) => {
  return (
    <div className="server-channels__container">
      <h3>
        {server ? server.serverName : ""}
      </h3>
      <div className="server__channels-section">
        <ul>
          {server
            ? server.channels.map((channel) => (
                <li key={channel.id}>{channel.channelName}</li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ServerChannels;
