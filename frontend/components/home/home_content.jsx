import React from "react";
import AllFriends from "../friends/all_friends";
import AddFriend from "../friends/add_friend";
import DmContent from "./dm/dm_content";

function HomeContent(props) {
  const content =
    props.friendsListActive && !props.dmActive ? (
      <AllFriends />
    ) : props.dmActive ? (
      <DmContent />
    ) : (
      <AddFriend setFriendsList={props.setFriendsList} />
    );

  return (
    <div className="server-index__home__content">
      <div className="home-content__container">
        {/* {props.friendsListActive && !props.dmActive ? (
          <AllFriends />
        ) : (
          <AddFriend setFriendsList={props.setFriendsList} />
        )} */}
        {content}
      </div>
    </div>
  );
}

export default HomeContent;
