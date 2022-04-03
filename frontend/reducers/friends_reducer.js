import {
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import {
  RECEIVE_FRIENDSHIP,
  REMOVE_FRIENDSHIP,
} from "../actions/friendship_actions";

const friendsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      for (let friend of action.data.friends) {
        newState[friend.id] = friend;
      }
      return newState;
    case RECEIVE_USER:
      for (let friend of action.data.friends) {
        newState[friend.id] = friend;
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    case REMOVE_FRIENDSHIP:
      delete newState[action.data];
      return newState;
    case RECEIVE_FRIENDSHIP:
      newState[action.friendship.friend.id] = action.friendship.friend;
      return newState;
    default:
      return oldState;
  }
};

export default friendsReducer;
