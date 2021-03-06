import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.data.user.id] = action.data.user;
      return newState;
    case RECEIVE_USER:
      newState[action.data.user.id] = action.data.user;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default usersReducer;
