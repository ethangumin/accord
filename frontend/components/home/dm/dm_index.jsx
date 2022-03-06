import React from "react";
import Dm from "./dm";

const DmIndex = ({ friends, currentUser }) => {
  return (
    <div className="server-index__dm">
      <div className="dm__container">
        <div>
          <div className="dm__start-convo-container">
            <input type="text" placeholder="Find or start a conversion" />
          </div>
          <div className="dm__header">
            <p>DIRECT MESSAGES</p>
            <p>+</p>
          </div>
          <ul className="dm__messages">
            {friends.map((friend) => (
              <Dm key={friend.id} friend={friend} />
            ))}
          </ul>
        </div>
        <div className="current-user">
          <p className="current-user__icon">{currentUser.username[0]}</p>
          <p className="current-user__username">{currentUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default DmIndex;