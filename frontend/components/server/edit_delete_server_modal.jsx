import React from "react";

const EditDeleteServerContextMenu = (props) => {
  return (
    <div
      className={
        props.status ? "edit-delete-server-modal__container" : "hidden"
      }
      style={props.style}
    >
      <form>EditDeleteServerContextMenu</form>
    </div>
  );
};

export default EditDeleteServerContextMenu;
