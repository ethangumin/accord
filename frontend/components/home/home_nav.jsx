import React, { useState } from "react";

const HomeNav = ({ logout, history }) => {
  const [friendsList, setFriendsList] = useState(false);
  const [addFriend, setAddFriend] = useState(false);

  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  const addFriendHandler = (e) => {
    e.preventDefault();
    setAddFriend(true);
    setFriendsList(false);
  };

  const friendsListHandler = () => {
    setAddFriend(false);
    setFriendsList(true);
  };

  return (
    <div className="server-index__home__nav">
      <div className="home-nav__container">
        <div className="home-nav__section-1">
          <p
            style={{ borderRight: "1px solid gray" }}
            onClick={() => friendsListHandler()}
          >
            Friends
          </p>
          {/* <p>Online</p> */}
          <p>All</p>
          <input
            type="button"
            value="Add Friend"
            onClick={(e) => addFriendHandler(e)}
          />
        </div>
        <div className="home-nav__section-2">
          {/* <p>New Group</p>
          <p>Inbox</p>
          <p>Help</p> */}
          <input
            type="button"
            value="Logout"
            onClick={(e) => logoutHandler(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
