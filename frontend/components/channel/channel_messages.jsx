import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from "../../actions/message_actions";
import ChannelMessageForm from "./channel_message_form";
import EditDeleteMessage from "./edit_delete_message";

const ChannelMessages = (props) => {
  const [messageMenu, setMessageMenu] = useState(false);
  const [ctxMessage, setCtxMessage] = useState(null);
  const [editMessage, setEditMessage] = useState(false);
  const [editMessageContent, setEditMessageContent] = useState();
  const messages = useSelector((state) => state.entities.messages);
  const dispatch = useDispatch();
  const bottom = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const stream = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        channelId: props.currentChannelId,
      },
      {
        received: (data) => {
          switch (data.type) {
            case "message":
              // debugger
              dispatch(receiveMessage(data.message));
              break;
            case "messages":
              dispatch(receiveMessages(data.messages));
              break;
            case "destroy":
              dispatch(removeMessage(data.message.id));
              break;
            case "update":
              // debugger;
              dispatch(receiveMessage(data.message));
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
          // debugger;
          return this.perform("update", data);
        },
      }
    );

    return () => {
      // debugger;
      stream.unsubscribe();
    };
  }, [props.currentChannelId]);

  useEffect(() => {
    if (bottom.current) {
      bottom.current.scrollIntoView();
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
    updatedMessage.body = editMessageContent;
    
    App.cable.subscriptions.subscriptions[0].update({
      message: updatedMessage,
    });
  };

  const editMessageHandler = (e) => {
    setEditMessageContent(e.target.value);
  };

  // const focusMessageHandler = () => {
  //   inputRef.current.select();
  // }

  const messageList = messages ? (
    Object.values(messages).map((message, index) => {
      return (
        <li
          key={index}
          className="channel-message"
          onMouseEnter={() =>
            toggleEditDeleteMessage(props.currentUser, message)
          }
          onMouseLeave={() => {
            setMessageMenu(false);
            setEditMessage(false);
          }}
        >
          <p>{message.sender_username ? message.sender_username[0] : ""}</p>
          <div className="channel-message_info">
            <div className="channel-message__username-date">
              <p>{message.sender_username}</p>
              <p>{message.created_at}</p>
            </div>
            <form onSubmit={(e) => submitEditMessageHandler(e, message)}>
              <input
                type="text"
                defaultValue={message.body}
                onChange={(e) => editMessageHandler(e)}
                // onFocus={focusMessageHandler}
                className={
                  !(editMessage && ctxMessage?.id === message.id)
                    ? "channel-message__body"
                    : "channel-message__body-edit"
                }
                disabled={
                  editMessage && ctxMessage?.id === message.id ? false : true
                }
                ref={inputRef}
              />
            </form>
          </div>
          <EditDeleteMessage
            inputRef={inputRef}
            // focusMessageHandler={focusMessageHandler}
            status={messageMenu}
            ctxMessage={ctxMessage}
            setEditMessage={setEditMessage}
            style={{
              display:
                messageMenu && ctxMessage?.id === message.id
                  ? "initial"
                  : "none",
            }}
          />
          <div ref={bottom} />
        </li>
      );
    })
  ) : (
    <div ref={bottom} />
  );

  return (
    <div className="channel-messages__container">
      <div className="channel-messages__list">{messageList}</div>
      <ChannelMessageForm
        currentChannel={props.currentChannel}
        currentUser={props.currentUser}
        currentChannels={props.currentChannels}
        currentChannelId={props.currentChannelId}
      />
    </div>
  );
};

export default ChannelMessages;
