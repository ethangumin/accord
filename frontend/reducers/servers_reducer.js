import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../actions/server_actions";
import {
  REMOVE_SERVER_MEMBER,
  RECEIVE_SERVER_MEMBER,
} from "../actions/server_member_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serversReducer = (
  oldState = { enrolledServers: {}, nonEnrolledServers: {} },
  action
) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let servers = action.data.servers;
      for (let server of servers) {
        newState.enrolledServers[server.id] = server;
      }
      return newState;
    case RECEIVE_USER:
      for (let server of action.data.servers) {
        newState.enrolledServers[server.id] = server;
      }
      return newState;
    case RECEIVE_SERVERS:
      for (let server of action.servers) {
        if (!newState.enrolledServers[server.id]) {
          newState.nonEnrolledServers[server.id] = server;
        }
      }
      return newState;
    case RECEIVE_SERVER:
      if (!!newState.enrolledServers[action.data.server.id]) {
        newState.enrolledServers[action.data.server.id] = action.data.server;
        return newState;
      } else if (
        !newState.enrolledServers[action.data.server.id] &&
        action.data.serverMember
      ) {
        newState.enrolledServers[action.data.server.id] = action.data.server;
        return newState;
      } else if (!newState.enrolledServers[action.data.server.id]) {
        // debugger;
        newState.nonEnrolledServers[action.data.server.id] = action.data.server;
        return newState;
      }
    // newState[action.data.server.id] = action.data.server;
    // return newState;
    case REMOVE_SERVER:
      delete newState.enrolledServers[action.serverId];
      return newState;
    case REMOVE_SERVER_MEMBER:
      // debugger;
      newState.nonEnrolledServers[action.serverMember] =
        newState.enrolledServers[action.serverMember];
      delete newState.enrolledServers[action.serverMember];
      // debugger;
      return newState;
    case RECEIVE_SERVER_MEMBER:
      // debugger;
      newState.enrolledServers[action.serverMember] =
        newState.nonEnrolledServers[action.serverMember];
      delete newState.nonEnrolledServers[action.serverMember];
      return newState;
    case LOGOUT_CURRENT_USER:
      return { enrolledServers: {}, nonEnrolledServers: {} };
    default:
      return oldState;
  }
};

export default serversReducer;
