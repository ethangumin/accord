import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../actions/server_actions";

import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      newState[action.server.id] = action.server;
      return newState;
    case REMOVE_SERVER:
      delete newState[action.serverId];
      return newState;
    case RECEIVE_CHANNEL:
      // debugger;
      let channels = newState[action.channel.serverId].channels;
      const newChannel = {
        id: action.channel.id,
        channelName: action.channel.channelName,
        serverId: action.channel.serverId,
      };
      // debugger;
      for (let channel of channels) {
        if (channel.id === newChannel.id) {
          return oldState;
        }
      }

      const updatedChannels = [...channels, newChannel];
      newState[action.channel.serverId].channels = updatedChannels;
      return newState;
    default:
      return oldState;
  }
};

export default serversReducer;
