import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteServer } from "../../actions/server_actions";
import { deleteServerMember } from "../../actions/server_member_actions";

const EditDeleteServerContextMenu = (props) => {
  const dispatch = useDispatch();

  const deleteServerHandler = () => {
    dispatch(deleteServer(props.ctxServer.id));
    if (props.match.params.id === props.ctxServer.id.toString()) {
      props.history.push("/home");
    }
  };

  // const deleteServerMemberHandler = () => {
  //   dispatch(
  //     deleteServerMember({
  //       user_id: props.currentUser.id,
  //       server_id: props.ctxServer.id,
  //     })
  //   );
  // };

  const currentUserOptions =
    props.currentUser?.id === props.ctxServer?.creatorId ? (
      <div className="edit-delete-server-ctx-menu">
        <p onClick={(e) => props.toggleServerModal(e, "update")}>Edit Server</p>
        <p onClick={() => deleteServerHandler()}>Delete Server</p>
      </div>
    ) : (
      <div className="edit-delete-server-ctx-menu">
        {/* <p onClick={() => deleteServerMemberHandler()}>Leave Server</p> */}
        <p>Leave Server</p>
      </div>
    );

  return (
    <div
      className={
        props.status ? "edit-delete-server-ctx-menu__container" : "hidden"
      }
      style={props.style}
    >
      {/* <div className="edit-delete-server-ctx-menu">
        <p onClick={(e) => props.toggleServerModal(e, "update")}>Edit Server</p>
        <p onClick={() => deleteServerHandler()}>Delete Server</p>
      </div> */}
      {currentUserOptions}
    </div>
  );
};

export default withRouter(EditDeleteServerContextMenu);
