import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dm = (props) => {
  const friend = useSelector((state) => state.entities.friends[props.dmUserId]);

  const content = friend ? (
    <Link to={`/conversation/${props.dm.id}`}>
      <div className="dm">
        <p className="dm__icon">{friend.username[0]}</p>
        <p className="dm__username">{friend.username}</p>
      </div>
    </Link>
  ) : (
    <div></div>
  );

  return <div className="dm__container">{content}</div>;
};

export default Dm;
