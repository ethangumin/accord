import React, { useState } from "react";

const ConversationMessageForm = (props) => {
  const [sender_id, setSenderId] = useState(
    props.currentUser ? props.currentUser.id : ""
  );
  const [conversation_id, setConversationId] = useState(
    props.currentConversationId
  );
  const [sender_username, setSender_username] = useState(
    props.currentUser ? props.currentUser.username : ""
  );
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      sender_id: sender_id,
      conversation_id: conversation_id,
      sender_username: sender_username,
      body: body,
    };
    // payload.conversation_id = props.currentConversationId;

    App.cable.subscriptions.subscriptions[0].speak({
      message: payload,
    });

    setBody("");
  };

  return (
    <div className="channel_content_messages_form__container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={`Message @${props.friend ? props.friend.username : ""}`}
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          style={{ display: "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConversationMessageForm;
