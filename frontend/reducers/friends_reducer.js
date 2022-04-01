import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const friendsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      for(let friend of action.data.friends){
        newState[friend.id] = friend;
      }
      return newState;
    case RECEIVE_USER:
      for(let friend of action.data.friends){
        newState[friend.id] = friend;
      }
      return newState;
    default:
      return oldState;
  }
};

export default friendsReducer;
