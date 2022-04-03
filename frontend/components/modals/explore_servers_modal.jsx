import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestServers, requestServer } from "../../actions/server_actions";
import { withRouter } from "react-router-dom";

const ExploreServersModal = (props) => {
  const servers = useSelector(
    (state) => state.entities.servers.nonEnrolledServers
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.active) {
      dispatch(requestServers());
    }
  }, [props.active]);

  const exitModalHandler = () => {
    props.toggleExploreModal();
  };

  const enterServerHandler = (e, server) => {
    e.stopPropagation();
    dispatch(requestServer(server.id)).then((server) => {
      // debugger;
      exitModalHandler();
      props.history.push(
        `/server/${server.data.server.id}/channel/${server.data.channels[0].id}`
      );
    });
  };

  const activeContent = (
    <div className="explore-servers-modal">
      <div className="explore-servers-modal__content">
        {Object.values(servers).map((server, index) => (
          <div
            key={server.id || index}
            className="explore-servers-modal__item"
            onClick={(e) => enterServerHandler(e, server)}
          >
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

export default withRouter(ExploreServersModal);
