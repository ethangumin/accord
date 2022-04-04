import {
  RECEIVE_CONVERSATION_MESSAGES,
  RECEIVE_CONVERSATION_MESSAGE,
  REMOVE_CONVERSATION_MESSAGE,
} from "../actions/conversation_message_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const conversationMessagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CONVERSATION_MESSAGE:
      // debugger;
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_CONVERSATION_MESSAGES:
      // debugger;
      newState = {};
      for (let message of action.messages) {
        newState[message.id] = message;
      }
      return newState;
    case REMOVE_CONVERSATION_MESSAGE:
      // debugger;
      delete newState[action.messageId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default conversationMessagesReducer;
