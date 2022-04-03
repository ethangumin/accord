import React from "react";
import { useSelector } from "react-redux";
import ServersNav from "../server/servers_nav";
import DmIndex from "../home/dm/dm_index";
import ConversationHeader from "./conversation_header";
import ConversationBody from "./conversation_body";

const Conversation = () => {
  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  return (
    <div className="server-index__container">
      <ServersNav />
      <DmIndex currentUser={currentUser} />
      <div className="server-index__home">
        <ConversationHeader />
        <ConversationBody />
      </div>
    </div>
  );
};

export default Conversation;
