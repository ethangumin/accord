import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchServerMembers } from "../../actions/server_member_actions";

const ChannelMembers = (props) => {
  const dispatch = useDispatch();

  const serverMembers = useSelector((state) =>
    Object.values(state.entities.serverMembers)
  );

  useEffect(() => {
    if (props.currentChannel) {
      dispatch(fetchServerMembers(props.currentChannel.serverId));
    }
  }, [props.currentChannel]);

  const serverMembersDisplay = serverMembers.map((user) => (
    <div className="channel-content__member" key={user.id}>
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
    </div>
  );
};

export default ChannelMembers;
