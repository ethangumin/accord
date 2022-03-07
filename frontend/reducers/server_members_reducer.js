import { RECEIVE_SERVER_MEMBER } from "../actions/server_member_actions";

const serverMembersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER_MEMBER:
      return action.serverMember;
    default:
      return oldState;
  }
};

export default serverMembersReducer;
