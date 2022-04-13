import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ChannelMemberCard = (props) => {
  const dispatch = useDispatch();

  const friends = useSelector((state) => state.entities.friends);
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  const cardAction =
    props.currentUser?.id in friends ? (
      <input
        type="text"
        placeholder={`Message @${props.currentUser.username}`}
      />
    ) : currentUser.id === props.currentUser?.id ? (
      ""
    ) : (
      <button>Add Friend</button>
    );

  return (
    <div
      className={
        props.cardActive
          ? "channel-member-card__container"
          : "hidden"
      }
      style={props.style}
    >
      <div className="channel-member-card__icon">
        {props.currentUser?.username[0]}
      </div>
      <p className="channel-member-card__username">{props.currentUser?.username}</p>
      {cardAction}
    </div>
  );
};

export default ChannelMemberCard;
