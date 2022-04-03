import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FriendItem from "./friend_item";
import FriendOptions from "./friend_options";

const AllFriends = (props) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [friendPos, setFriendPos] = useState({ x: "0px", y: "0px" });
  const [currentFriend, setCurrentFriend] = useState(null);

  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );
  const friends = useSelector((state) => state.entities.friends);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener("click", (e) => {
      e.preventDefault();
      setOptionsActive(false);
    });

    return () => controller.abort;
  }, []);

  const friendItems = Object.values(friends).map((friend) => (
    <FriendItem
      key={friend.id}
      friend={friend}
      setFriendPos={setFriendPos}
      setCurrentFriend={setCurrentFriend}
      setOptionsActive={setOptionsActive}
    />
  ));

  return (
    <div className="all-friends">
      <p className="all-friends__header">All Friends - {friendItems.length}</p>
      {friendItems}
      <FriendOptions
        style={{ top: friendPos.x, left: friendPos.y }}
        status={optionsActive}
        friend={currentFriend}
        // toggleServerModal={toggleServerModal}
        currentUser={currentUser}
      />
    </div>
  );
};

export default AllFriends;
