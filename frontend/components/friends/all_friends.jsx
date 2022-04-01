import React from "react";
import { useSelector } from "react-redux";
import FriendItem from "./friend_item";

const AllFriends = (props) => {
  const friends = useSelector((state) => state.entities.friends);

  const friendItems = Object.values(friends).map((friend) => (
    <FriendItem key={friend.id} friend={friend} />
  ));

  return (
    <div className="all-friends">
      <p
        className="all-friends__header"
      >
        All Friends - {friendItems.length}
      </p>
      {friendItems}
    </div>
  );
};

export default AllFriends;
