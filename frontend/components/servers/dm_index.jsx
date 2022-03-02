import React from "react";
import Dm from "./dm";

const DmIndex = () => {
  return (
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
          {/* Fake Data */}
          <Dm />
          <Dm />
          <Dm />
          <Dm />
          <Dm />
          <Dm />
        </ul>
      </div>
      <div className="current-user">
        <p className="current-user__icon">F</p>
        <p className="current-user__username">Current User</p>
      </div>
    </div>
  );
};

export default DmIndex;
