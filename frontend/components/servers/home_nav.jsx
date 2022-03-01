import React from "react";

const HomeNav = ({ logout, history }) => {
  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <div>
      <p>Home Nav</p>
      <input type="button" value="Logout" onClick={(e) => logoutHandler(e)} />
    </div>
  );
};

export default HomeNav;
