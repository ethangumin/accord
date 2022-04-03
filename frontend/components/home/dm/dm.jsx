import React from "react";
import { useSelector } from "react-redux";

const Dm = (props) => {
  const friend = useSelector((state) => state.entities.friends[props.dmUserId]);

  return (
    <div className="dm__container">
      <div className="dm">
        <p className="dm__icon">{friend.username[0]}</p>
        <p className="dm__username">{friend.username}</p>
      </div>
    </div>
  );
};

export default Dm;
