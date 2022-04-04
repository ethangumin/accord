import React from "react";
import { useSelector } from "react-redux";
import Dm from "./dm";

const DmIndex = ({ currentUser }) => {
  const user = currentUser.id ? currentUser : currentUser.user;

  const allDms = useSelector((state) =>
    Object.values(state.entities.conversations)
  );

  return (
    <div className="server-index__dm">
      <div className="dm__container">
        <div>
          <div className="dm__start-convo-container">
            <input
              type="text"
              placeholder="Find or start a conversion"
              disabled
            />
          </div>
          <div className="dm__header">
            <p>DIRECT MESSAGES</p>
            {/* <p>+</p> */}
          </div>
          <ul className="dm__messages">
            {allDms.map((dm) => (
              <Dm
                key={dm.id}
                dmUserId={user.id === dm.user1Id ? dm.user2Id : dm.user1Id}
                dm={dm}
              />
            ))}
          </ul>
        </div>
        <div className="current-user">
          <p className="current-user__icon">{user.username[0]}</p>
          <p className="current-user__username">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default DmIndex;
