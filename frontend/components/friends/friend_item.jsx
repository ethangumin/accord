import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageIcon from "../../../app/assets/images/message-solid.svg";
import OptionsIcon from "../../../app/assets/images/ellipsis-vertical-solid.svg";
import { createConversation } from "../../actions/conversation_actions";

const FriendItem = (props) => {
  const dispatch = useDispatch();

  const [conversationId, setConversationId] = useState(null);

  const conversations = useSelector((state) =>
    Object.values(state.entities.conversations)
  );

  useEffect(() => {
    for (let conversation of conversations) {
      if (
        conversation.user1Id === props.friend.id ||
        conversation.user2Id === props.friend.id
      ) {
        setConversationId(conversation.id);
      }
    }
  }, []);

  const enterConversationHandler = () => {
    if (conversationId) {
      props.history.push(`/conversation/${conversationId}`);
    } else {
      dispatch(createConversation(props.friend.id)).then((conversation) => {
        props.history.push(`/conversation/${conversation.conversation.id}`);
      });
    }
  };

  const toggleFriendOptions = (e) => {
    e.stopPropagation();
    const xPos = e.pageY - 50 + "px";
    const yPos = e.pageX - 70 + "px";

    props.setFriendPos({ x: xPos, y: yPos });
    props.setCurrentFriend(props.friend);
    props.setOptionsActive(true);
  };

  return (
    <div className="friend-item">
      <div>
        <p className="friend-item__icon">{props.friend.username[0]}</p>
        <p className="friend-item__username">{props.friend.username}</p>
      </div>
      <div>
        <img
          src={MessageIcon}
          alt="message user icon"
          className="friend-item__message-icon"
          onClick={() => enterConversationHandler()}
        />
        <img
          src={OptionsIcon}
          alt="user options icon"
          className="friend-item__options-icon"
          onClick={(e) => toggleFriendOptions(e)}
        />
      </div>
    </div>
  );
};

export default withRouter(FriendItem);
