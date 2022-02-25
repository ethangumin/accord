import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../session_actions";

const SessionReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[id] = action.user.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState[id] = null;
      return newState;
    default:
      return oldState;
  }
};

export default SessionReducer;