import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    // case RECEIVE_SERVER:
    //   const newServer = {
    //     id: action.server.id,
    //     serverName: action.server.serverName,
    //     channels: action.server.channels,
    //   };
    //   Object.values(newState)[0].servers.push(newServer);
    //   return newState;
    // case RECEIVE_CHANNEL:
    //   // debugger;
    //   const newChannel = {
    //     id: action.channel.id,
    //     channelName: action.channel.channelName,
    //     serverId: action.channel.serverId,
    //   };
    //   const currentServer = Object.values(newState)[0].servers.find(
    //     (server) => server.id === action.channel.serverId
    //   );
    //   currentServer.channels.push(newChannel);
    //   // newState[Object.values(newState)[0]].servers[].channels.push(action.channel);
    //   return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
