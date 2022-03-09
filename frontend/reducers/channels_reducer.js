import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_MESSAGE } from "../actions/message_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_USER:
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
    // case RECEIVE_CHANNEL:
    //   newState = action.channel;
    //   return newState;
    // case RECEIVE_MESSAGE:
    //   debugger;
    //   newState.messages.push(action.message.id);
    //   return newState;
    default:
      return oldState;
  }
};

export default channelsReducer;
