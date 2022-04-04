import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ServersNav from "../server/servers_nav";
import DmIndex from "../home/dm/dm_index";
import ConversationHeader from "./conversation_header";
import ConversationBody from "./conversation_body";
import { fetchUser } from "../../actions/user_actions";

const Conversation = (props) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );
  const enrolledServers = useSelector((state) =>
    Object.values(state.entities.servers.enrolledServers)
  );
  const currentChannels = useSelector((state) =>
    Object.values(state.entities.channels)
  );
  const friend = useSelector((state) => {
    const conversation = state.entities.conversations[props.match.params.id];
    if (conversation && conversation.user1Id === currentUser.id) {
      return state.entities.friends[conversation.user2Id];
    } else if (conversation && conversation.user1Id !== currentUser.id) {
      return state.entities.friends[conversation.user1Id];
    } else {
      return undefined;
    }
  });

  useEffect(() => {
    dispatch(fetchUser(currentUser.id));
  }, []);

  return (
    <div className="server-index__container">
      <ServersNav
        enrolledServers={enrolledServers}
        currentChannels={currentChannels}
        createServer={props.createServer}
        createServerMember={props.createServerMember}
        createChannel={props.createChannel}
        currentUser={currentUser}
        fetchChannel={props.fetchChannel}
      />
      <DmIndex currentUser={currentUser} />
      <div className="server-index__home">
        <ConversationHeader friend={friend} />
        <ConversationBody />
      </div>
    </div>
  );
};

export default Conversation;
