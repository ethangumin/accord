import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE,
} from "../actions/message_actions";

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return action.message;
    case RECEIVE_MESSAGES:
      return action.messages;
    case REMOVE_MESSAGE:
      delete newState[action.messageId];
      return newState;
    default:
      return oldState;
  }
};

export default messagesReducer;
