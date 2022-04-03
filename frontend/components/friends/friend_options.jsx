import React from "react";
import { useDispatch } from "react-redux";
import { deleteFriendship } from "../../actions/friendship_actions";

const FriendOptions = (props) => {
  const dispatch = useDispatch();

  const deleteFriendshipHandler = () => {
    dispatch(deleteFriendship(props.friend.id));
  };

  return (
    <div
      className={props.status ? "friend_options" : "hidden"}
      style={props.style}
    >
      <p onClick={() => deleteFriendshipHandler()}>Remove Friend</p>
    </div>
  );
};

export default FriendOptions;
