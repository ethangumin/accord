import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_MESSAGE } from "../actions/message_actions";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState = action.channel;
      return newState;
    case RECEIVE_MESSAGE:
      newState.messages.push(action.message);
      return newState;
    default:
      return oldState;
  }
};

export default channelsReducer;
