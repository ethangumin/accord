import React from "react";
import AllFriends from "../friends/all_friends";
import AddFriend from "../friends/add_friend";

function HomeContent(props) {
  return (
    <div className="server-index__home__content">
      <div className="home-content__container">
        {props.friendsListActive && !props.dmActive ? (
          <AllFriends />
        ) : (
          <AddFriend setFriendsList={props.setFriendsList} />
        )}
      </div>
    </div>
  );
}

export default HomeContent;
