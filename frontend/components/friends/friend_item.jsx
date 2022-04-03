import React from "react";
import MessageIcon from "../../../app/assets/images/message-solid.svg";
import OptionsIcon from "../../../app/assets/images/ellipsis-vertical-solid.svg";

const FriendItem = (props) => {
  const toggleFriendOptions = (e) => {
    e.stopPropagation();
    const xPos = e.pageY - 50 + "px";
    const yPos = e.pageX - 70 + "px";

    props.setFriendPos({ x: xPos, y: yPos });
    props.setCurrentFriend(props.friend);
    props.setOptionsActive(true);
  };

  return (
    <div className="friend-item">
      <div>
        <p className="friend-item__icon">{props.friend.username[0]}</p>
        <p className="friend-item__username">{props.friend.username}</p>
      </div>
      <div>
        <img
          src={MessageIcon}
          alt="message user icon"
          className="friend-item__message-icon"
        />
        <img
          src={OptionsIcon}
          alt="user options icon"
          className="friend-item__options-icon"
          onClick={(e) => toggleFriendOptions(e)}
        />
      </div>
    </div>
  );
};

export default FriendItem;
