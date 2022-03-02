import React from "react";
import Hashtag from "../../../app/assets/images/hashtag-solid.svg";

const ServerChannels = ({ server, currentUser }) => {
  return (
    <div className="server-channels__container">
      <h3 className="server-channels__header">
        {server ? server.serverName : ""}
      </h3>
      <div className="server-channels__channels-idx">
        <ul>
          {server
            ? server.channels.map((channel) => (
                <li key={channel.id}>
                  <img src={Hashtag} alt="hashtag" className="channel-pound" />
                  <p>{channel.channelName}</p>
                </li>
              ))
            : ""}
        </ul>
        <div className="server-channels__curr-user">
          <p></p>
          <p>{currentUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default ServerChannels;
