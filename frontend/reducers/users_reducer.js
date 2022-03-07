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
    case RECEIVE_SERVER:
      // debugger;
      const newServer = {
        id: action.server.id,
        serverName: action.server.serverName,
        channels: action.server.channels,
      };
      const servers = Object.values(newState)[0].servers;

      // debugger;
      for (let server of servers) {
        if (server.id === newServer.id) {
          return oldState;
        }
      }

      const newServers = [...servers, newServer];

      // debugger;
      Object.values(newState)[0].servers = newServers;

      // debugger;
      // servers.push(newServer);
      return newState;
    case RECEIVE_CHANNEL:
      // debugger;
      const newChannel = {
        id: action.channel.id,
        channelName: action.channel.channelName,
        serverId: action.channel.serverId,
      };

      // debugger;

      const currentServer = Object.values(newState)[0].servers.find(
        (server) => server.id === action.channel.serverId
      );

      // debugger;

      const channels = currentServer.channels;

      // debugger;

      for(let channel of channels){
        if(channel.id === newChannel.id){
          return oldState;
        }
      }

      const newChannels = [...channels, newChannel];

      // debugger;

      currentServer.channels = newChannels;

      // debugger;
      // channels.push(newChannel);
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;
