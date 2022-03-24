import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateServer } from "../../actions/server_actions";
import { withRouter } from "react-router-dom";

const ServerModal = (props) => {
  const dispatch = useDispatch();

  const [serverName, setServerName] = useState(
    props.currentUser ? `${props.currentUser.username}'s Server` : ""
  );

  useEffect(() => {
    if (props.ctxServer) setServerName(props.ctxServer.serverName);
  }, [props.ctxServer]);

  const updateServerHandler = (e) => {
    e.preventDefault();
    dispatch(updateServer({ id: props.ctxServer.id, server_name: serverName }));
    props.toggleServerModal(e);
  };

  const createServerHandler = (e) => {
    e.preventDefault();
    props.createServer({ server_name: serverName }).then((data) => {
      props.history.push(
        `/server/${data.data.server.id}/channel/${data.data.channel.id}`
      );
    });
    props.toggleServerModal(e);
    setServerName(`${props.currentUser.username}'s Server`);
  };

  const exitModalHandler = (e) => {
    e.preventDefault();
    props.toggleServerModal(e);
    setServerName(`${props.currentUser.username}'s Server`);
  };

  const updateServerNameHandler = (e) => {
    setServerName(e.target.value);
  };

  const formTitle = `${props.serverModalType} a server`;

  return (
    <div
      className={
        props.active === true ? "server-modal__bg" : "server-modal__hide"
      }
      onClick={(e) => exitModalHandler(e)}
    >
      <div className="server-modal" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={
            props.serverModalType === "create"
              ? (e) => createServerHandler(e)
              : (e) => updateServerHandler(e)
          }
          className="server-modal__content"
        >
          <h1>{formTitle[0].toUpperCase() + formTitle.slice(1)}</h1>
          <p>
            {props.serverModalType === "create"
              ? "Your server is where you and your friends hang out. Make yours and start talking."
              : ""}
          </p>
          <label>SERVER NAME</label>
          <input
            type="text"
            value={serverName}
            onChange={(e) => updateServerNameHandler(e)}
          />
          <div className="server-modal__submit">
            <input
              type="submit"
              value={props.serverModalType === "create" ? "Create" : "Update"}
              disabled={serverName.length === 0 ? true : false}
              className={
                serverName.length === 0
                  ? "server-modal__submit-btn server-modal__submit-disabled"
                  : "server-modal__submit-btn"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(ServerModal);
