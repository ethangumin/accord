import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const sessionReducer = (oldState = { id: null }, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger;
      newState.id = action.user.id;
      return newState;
    // return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      newState.id = null;
      return newState;
    default:
      return oldState;
  }
};

export default sessionReducer;
