import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import At from "../../../app/assets/images/at-solid.svg";

const ConversationHeader = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    props.history.push("/");
  };

  return (
    <div className="channel-nav__container" style={{ height: "5vh" }}>
      <div className="channel-nav__channel-name">
        <img src={At} alt="conversation at" className="channel-pound" />
        <p style={{ paddingTop: "0" }}>{props.friend?.username}</p>
      </div>
      <input type="button" value="Logout" onClick={(e) => logoutHandler(e)} />
    </div>
  );
};

export default withRouter(ConversationHeader);
