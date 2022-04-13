import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchServerMembers } from "../../actions/server_member_actions";
import ChannelMemberCard from "./channel_member_card";

const ChannelMembers = (props) => {
  const dispatch = useDispatch();
  const [cardActive, setCardActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pos, setPos] = useState({ x: "0px", y: "0px" });
  const serverMembers = useSelector((state) =>
    Object.values(state.entities.serverMembers)
  );
  // const loggedInUser = useSelector(
  //   (state) => state.entities.users[state.session.id]
  // );

  useEffect(() => {
    if (props.currentChannel) {
      dispatch(fetchServerMembers(props.currentChannel.serverId));
    }
  }, [props.currentChannel]);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener("click", (e) => {
      e.preventDefault();
      setCardActive(false);
    });

    return () => controller.abort;
  }, []);

  const toggleCardHandler = (e, user) => {
    e.stopPropagation();

    const xPos = e.pageY - 60 + "px";
    const yPos = e.pageX - 200 + "px";

    setPos({ x: xPos, y: yPos });
    setCardActive(true);
    setCurrentUser(user);
  };

  const serverMembersDisplay = serverMembers.map((user) => (
    <div
      className="channel-content__member"
      key={user.id}
      onClick={(e) => toggleCardHandler(e, user)}
    >
      <p className="channel-content__member-icon">{user.username[0]}</p>
      <p>
        {user.username.length < 12
          ? user.username
          : user.username.slice(0, 10) + "..."}
      </p>
    </div>
  ));

  return (
    <div className="channel-content__members">
      <h3>SERVER MEMBERS - {serverMembers.length}</h3>
      {serverMembersDisplay}
      <ChannelMemberCard
        cardActive={cardActive}
        currentUser={currentUser}
        pos={pos}
        style={{ top: pos.x, left: pos.y}}
      />
    </div>
  );
};

export default ChannelMembers;
