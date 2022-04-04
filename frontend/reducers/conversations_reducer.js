import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";

const conversationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      for (let conversation of action.data.conversations) {
        newState[conversation.id] = conversation;
      }
      return newState;
    case RECEIVE_USER:
      for (let conversation of action.data.conversations) {
        newState[conversation.id] = conversation;
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_CONVERSATION:
      newState[action.conversation.id] = action.conversation;
      return newState;
    default:
      return oldState;
  }
};

export default conversationsReducer;
