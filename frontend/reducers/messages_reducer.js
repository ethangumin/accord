import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE,
} from "../actions/message_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      // debugger
      newState[action.message.id] = action.message;
      // debugger;
      return newState;
    case RECEIVE_MESSAGES:
      for(let message of action.messages){
        newState[message.id] = message;
      }
      return newState;
    case REMOVE_MESSAGE:
      // debugger;
      delete newState[action.messageId];
      // debugger;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default messagesReducer;
