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
  const messages = useSelector((state) => state.entities.messages);
  const dispatch = useDispatch();
  const bottom = useRef();

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
              dispatch(receiveMessage(data.message));
              break;
            case "messages":
              dispatch(receiveMessages(data.messages));
              break;
            case "destroy":
              dispatch(removeMessage(data.message.id));
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
          // debugger;
          return this.perform("destroy", data);
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

  // const deleteMessageHandler = (messageId) => {
  //   // debugger;
  //   App.cable.subscriptions.subscriptions[0].destroy({
  //     messageId: messageId,
  //   });
  // };

  const toggleEditDeleteMessage = (user, message) => {
    if (user.id !== message.sender_id) return;
    setMessageMenu(true);
    setCtxMessage(message);
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
          onMouseLeave={() => setMessageMenu(false)}
        >
          <p>{message.sender_username ? message.sender_username[0] : ""}</p>
          <div className="channel-message_info">
            <div className="channel-message__username-date">
              <p>{message.sender_username}</p>
              <p>{message.created_at}</p>
            </div>
            <p>{message.body}</p>
            {/* <p onClick={() => deleteMessageHandler(message.id)}>X</p> */}
          </div>
          <EditDeleteMessage
            status={messageMenu}
            ctxMessage={ctxMessage}
            style={{
              display:
                messageMenu && ctxMessage.id === message.id
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
