import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveMessage, receiveMessages } from "../../actions/message_actions";
import ChannelMessageForm from "./channel_message_form";

const ChannelMessages = (props) => {
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
          }
        },
        speak: function (data) {
          return this.perform("speak", data);
        },
        load: function () {
          return this.perform("load");
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

  const messageList = messages ? (
    Object.values(messages).map((message, index) => {
      return (
        <li key={index} className="channel-message">
          <p>{message.sender_username ? message.sender_username[0] : ""}</p>
          <div className="channel-message_info">
            <div className="channel-message__username-date">
              <p>{message.sender_username}</p>
              <p>{message.created_at}</p>
            </div>
            <p>{message.body}</p>
          </div>
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
