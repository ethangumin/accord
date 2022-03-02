import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel;
      return newState;
    default:
      return oldState;
  }
};

export default channelsReducer;
