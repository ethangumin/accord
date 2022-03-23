import React from "react";

const EditDeleteServerContextMenu = (props) => {
  return (
    <div
      className={
        props.status ? "edit-delete-server-ctx-menu__container" : "hidden"
      }
      style={props.style}
    >
      <div className="edit-delete-server-ctx-menu">
        <p>Edit Server</p>
        <p>Delete Server</p>
      </div>
    </div>
  );
};

export default EditDeleteServerContextMenu;
