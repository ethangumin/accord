import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createFriendship } from "../../actions/friendship_actions";
import { createConversation } from "../../actions/conversation_actions";

const ChannelMemberCard = (props) => {
  const dispatch = useDispatch();

  // const [message, setMessage] = useState("");
  const friends = useSelector((state) => state.entities.friends);
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );
  const conversation = useSelector((state) => {
    for (let conversation of Object.values(state.entities.conversations)) {
      if (
        conversation.user2Id === props.currentUser?.id ||
        conversation.user1Id === props.currentUser?.id
      ) {
        return conversation;
      }
    }
    return null;
  });

  const addFriendHandler = (e, friendId) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(createFriendship(friendId));
  };

  const startConversationHandler = (e, user) => {
    e.preventDefault();
    if (conversation) {
      debugger;
      props.history.push(`/conversation/${conversation.id}`);
    } else {
      debugger;
      dispatch(createConversation(user.id)).then((conversation) => {
        debugger;
        props.history.push(`/conversation/${conversation.conversation.id}`);
      });
    }
  };

  // const cardAction =
  //   props.currentUser?.id in friends ? (
  //     <input
  //       type="text"
  //       placeholder={`Message @${props.currentUser.username}`}
  //       onChange={e => setMessage(e)}
  //       onClick={e => e.stopPropagation()}
  //     />
  //   ) : currentUser.id === props.currentUser?.id ? (
  //     ""
  //   ) : (
  //     <button onClick={(e) => addFriendHandler(e, props.currentUser?.id)}>Add Friend</button>
  //   );

  const cardAction =
    props.currentUser?.id in friends ? (
      <button onClick={(e) => startConversationHandler(e, props.currentUser)}>
        Start Conversation
      </button>
    ) : currentUser.id === props.currentUser?.id ? (
      ""
    ) : (
      <button onClick={(e) => addFriendHandler(e, props.currentUser?.id)}>
        Add Friend
      </button>
    );

  return (
    <div
      className={props.cardActive ? "channel-member-card__container" : "hidden"}
      style={props.style}
    >
      <div className="channel-member-card__icon">
        {props.currentUser?.username[0]}
      </div>
      <p className="channel-member-card__username">
        {props.currentUser?.username}
      </p>
      {cardAction}
    </div>
  );
};

export default withRouter(ChannelMemberCard);
