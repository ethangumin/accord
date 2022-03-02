import React from "react";

const HomeNav = ({ logout, history }) => {
  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <div className="home-nav__container">
      <div className="home-nav__section-1">
        <p>Friends</p>
        <p>Online</p>
        <p>All</p>
        <p>Pending</p>
        <p>Blocked</p>
        <input type="button" value="Add Friend" />
      </div>
      <div className="home-nav__section-2">
        <p>New Group</p>
        <p>Inbox</p>
        <p>Help</p>
        <input type="button" value="Logout" onClick={(e) => logoutHandler(e)} />
      </div>
    </div>
  );
};

export default HomeNav;
