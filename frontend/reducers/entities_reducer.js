import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import serverMembersReducer from "./server_members_reducer";
import friendsReducer from "./friends_reducer";
import conversationsReducer from "./conversations_reducer";
import conversationMessagesReducer from "./conversation_messages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  conversationMessages: conversationMessagesReducer,
  friends: friendsReducer,
  conversations: conversationsReducer,
  serverMembers: serverMembersReducer,
});

export default entitiesReducer;
