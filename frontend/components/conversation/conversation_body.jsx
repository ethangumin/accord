import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  receiveConversationMessage,
  receiveConversationMessages,
  removeConversationMessage,
} from "../../actions/conversation_message_actions";
import ConversationMessageForm from "./conversation_message_form";
import EditDeleteMessage from "../channel/edit_delete_message";

const ConversationBody = (props) => {
  const [messageMenu, setMessageMenu] = useState(false);
  const [ctxMessage, setCtxMessage] = useState(null);
  const [editMessage, setEditMessage] = useState(false);
  const [editMessageContent, setEditMessageContent] = useState("");
  const messages = useSelector((state) => state.entities.conversationMessages);
  const dispatch = useDispatch();
  const bottom = useRef();
  const inputRef = useRef(null);

  useEffect(() => {
    const stream = App.cable.subscriptions.create(
      {
        channel: "ConversationChannel",
        conversationId: props.conversationId,
      },
      {
        received: (data) => {
          switch (data.type) {
            case "message":
            //   debugger;
              dispatch(receiveConversationMessage(data.message));
              break;
            case "messages":
            //   debugger;
              dispatch(receiveConversationMessages(data.messages));
              break;
            case "destroy":
            //   debugger;
              dispatch(removeConversationMessage(data.message.id));
              break;
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
        load: function () {
          return this.perform("load");
        },
        destroy: function (data) {
          return this.perform("destroy", data);
        },
        update: function (data) {
          return this.perform("update", data);
        },
      }
    );

    return () => {
      stream.unsubscribe();
    };
  }, [props.conversationId]);

  useEffect(() => {
    if (bottom.current) {
      bottom.current.scrollIntoView();
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const toggleEditDeleteMessage = (user, message) => {
    if (user.id !== message.sender_id) return;
    setMessageMenu(true);
    setCtxMessage(message);
  };

  const submitEditMessageHandler = (e, message) => {
    e.preventDefault();
    setEditMessage(false);

    const updatedMessage = Object.assign({}, message);

    if (editMessageContent.length !== 0) {
      updatedMessage.body = editMessageContent;
    } else {
      inputRef.current.value = message.body;
    }

    App.cable.subscriptions.subscriptions[0].update({
      message: updatedMessage,
    });
  };

  const editMessageHandler = (e) => {
    setEditMessageContent(e.target.value);
  };

  const onLeaveInputHandler = (message) => {
    setMessageMenu(false);
    setEditMessage(false);
  };

  const messageList = messages ? (
    Object.values(messages).map((message, index) => {
      return (
        <li
          key={index}
          className="channel-message"
          onMouseEnter={() =>
            toggleEditDeleteMessage(props.currentUser, message)
          }
          onMouseLeave={() => onLeaveInputHandler(message)}
        >
          <EditDeleteMessage
            ctxMessage={ctxMessage}
            setEditMessage={setEditMessage}
            setEditMessageContent={setEditMessageContent}
            style={{
              display:
                messageMenu && ctxMessage?.id === message.id
                  ? "initial"
                  : "none",
            }}
          />
          <p className="channel-message__icon">
            {message.sender_username ? message.sender_username[0] : ""}
          </p>
          <div className="channel-message_info">
            <div className="channel-message__username-date">
              <p>{message.sender_username}</p>
              <p>{message.created_at}</p>
            </div>
            {!(editMessage && ctxMessage?.id === message.id) ? (
              <p>{message.body}</p>
            ) : (
              <form onSubmit={(e) => submitEditMessageHandler(e, message)}>
                <input
                  type="text"
                  value={editMessageContent}
                  onChange={(e) => editMessageHandler(e)}
                  className={
                    !(editMessage && ctxMessage?.id === message.id)
                      ? "channel-message__body"
                      : "channel-message__body-edit"
                  }
                  ref={inputRef}
                  autoFocus
                  onFocus={(e) => e.currentTarget.select()}
                />
              </form>
            )}
          </div>
          <div ref={bottom} />
        </li>
      );
    })
  ) : (
    <div ref={bottom} />
  );

  return (
    <div
      className="channel-messages__container"
      style={{ height: "95vh", width: "100%" }}
    >
      <div className="channel-messages__list">{messageList}</div>
      <ConversationMessageForm
        currentConversationId={props.conversationId}
        currentUser={props.currentUser}
        currentConversation={props.currentConversation}
        friend={props.friend}
      />
    </div>
  );
};

export default ConversationBody;
