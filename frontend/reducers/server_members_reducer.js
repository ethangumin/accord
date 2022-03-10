import { RECEIVE_SERVER_MEMBER } from "../actions/server_member_actions";
import { RECEIVE_SERVER } from "../actions/server_actions";

const serverMembersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER_MEMBER:
      return action.serverMember;
    case RECEIVE_SERVER:
      if(action.data.serverMember){
        newState[action.data.serverMember.id] = action.data.serverMember;
        return newState;
      }
      return oldState;
    default:
      return oldState;
  }
};

export default serverMembersReducer;