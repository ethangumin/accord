import React from "react";
import ConversationMessageForm from "./conversation_message_form";

const ConversationBody = () => {
  return (
    <div
      className="channel-messages__container"
      style={{ height: "95vh", width: "100%" }}
    >
      {/* <div className="channel-messages__list">{messageList}</div> */}
      <ConversationMessageForm />
    </div>
  );
};

export default ConversationBody;
