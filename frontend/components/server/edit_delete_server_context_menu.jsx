import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteServer } from "../../actions/server_actions";

const EditDeleteServerContextMenu = (props) => {
  const dispatch = useDispatch();

  const deleteServerHandler = () => {
    dispatch(deleteServer(props.ctxServer));
  };

  return (
    <div
      className={
        props.status ? "edit-delete-server-ctx-menu__container" : "hidden"
      }
      style={props.style}
    >
      <div className="edit-delete-server-ctx-menu">
        <p>Edit Server</p>
        <p onClick={() => deleteServerHandler()}>Delete Server</p>
      </div>
    </div>
  );
};

export default EditDeleteServerContextMenu;
