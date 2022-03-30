import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestServers } from "../../actions/server_actions";
import { fetchUser } from "../../actions/user_actions";

const ExploreServersModal = (props) => {
  const servers = useSelector((state) => state.entities.servers);
  const currentUserId = useSelector(
    (state) => state.entities.users[state.session.id].id
  );
  // const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.active) {
      // inputRef.current.focus();
      // dispatch(requestServers()).then((servers) => setServers(servers));
      dispatch(requestServers());
    }
  }, [props.active]);

  const exitModalHandler = () => {
    dispatch(fetchUser(currentUserId)).then(() => {
      props.toggleExploreModal();
    });
  };

  const activeContent = (
    <div className="explore-servers-modal">
      <div className="explore-servers-modal__content">
        {Object.values(servers).map((server) => (
          <div key={server.id} className="explore-servers-modal__item">
            <p>{server.serverName}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={props.active ? "explore-servers-modal__bg" : "hide"}
      onClick={() => exitModalHandler()}
    >
      {props.active ? activeContent : ""}
    </div>
  );
};

export default ExploreServersModal;
