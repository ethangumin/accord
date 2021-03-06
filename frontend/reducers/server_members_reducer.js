import {
  RECEIVE_SERVER_MEMBER,
  RECEIVE_SERVER_MEMBERS,
} from "../actions/server_member_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serverMembersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER_MEMBERS:
      newState = {};
      for(let user of action.serverMembers.users){
        newState[user.id] = user;
      }
      return newState;
    case RECEIVE_SERVER_MEMBER:
      return action.serverMember;
    case RECEIVE_SERVER:
      if (action.data.serverMember) {
        newState[action.data.serverMember.id] = action.data.serverMember;
        return newState;
      }
      return oldState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default serverMembersReducer;
