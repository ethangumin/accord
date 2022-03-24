import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteServer } from "../../actions/server_actions";

const EditDeleteServerContextMenu = (props) => {
  const dispatch = useDispatch();

  const deleteServerHandler = () => {
    dispatch(deleteServer(props.ctxServer.id));
    if (props.match.params.id === props.ctxServer.id.toString()) {
      props.history.push("/home");
    }
  };

  return (
    <div
      className={
        props.status ? "edit-delete-server-ctx-menu__container" : "hidden"
      }
      style={props.style}
    >
      <div className="edit-delete-server-ctx-menu">
        <p onClick={(e) => props.toggleServerModal(e, "update")}>Edit Server</p>
        <p onClick={() => deleteServerHandler()}>Delete Server</p>
      </div>
    </div>
  );
};

export default withRouter(EditDeleteServerContextMenu);
