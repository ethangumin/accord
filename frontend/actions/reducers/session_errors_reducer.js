import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from "../session_actions";

const SessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;