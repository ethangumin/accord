import React from "react";
import TrashCan from "../../../app/assets/images/trash-can-solid.svg";
import Pencil from "../../../app/assets/images/pencil-solid.svg";

const EditDeleteMessage = (props) => {
  const deleteMessageHandler = (messageId) => {
    // debugger;
    App.cable.subscriptions.subscriptions[0].destroy({
      messageId: messageId,
    });
  };

  return (
    <div className="edit-delete-message__container" style={props.style}>
      <img src={Pencil} alt="edit message" />
      <img
        src={TrashCan}
        alt="delete message"
        onClick={() => deleteMessageHandler(props.ctxMessage.id)}
      />
    </div>
  );
};

export default EditDeleteMessage;
