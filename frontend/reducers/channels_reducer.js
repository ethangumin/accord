import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
      newState = {};
      let channels = action.data.channels;
      for (let channel of channels) {
        newState[channel.id] = channel;
      }
      return newState;
    case RECEIVE_CURRENT_USER:
      let currChannels = action.data.channels;
      for (let channel of currChannels) {
        newState[channel.id] = channel;
      }
      return newState;
    case RECEIVE_SERVER:
      // debugger;
      for (let channel of action.data.channels) {
        newState[channel.id] = channel;
      }
      // debugger;
      return newState;
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel;
      return newState;
    case REMOVE_CHANNEL:
      delete newState[action.channelId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default channelsReducer;
