import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return action.message;
    case REMOVE_MESSAGE:
      delete newState[action.messageId];
      return newState;
    default:
      return oldState;
  }
};

export default messagesReducer;
