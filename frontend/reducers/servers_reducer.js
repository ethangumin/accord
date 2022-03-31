import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../actions/server_actions";
import { REMOVE_SERVER_MEMBER } from "../actions/server_member_actions";
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
      // temporary
      // newState = {};
      // let currServers = action.data.servers;
      // for (let server of currServers) {
      //   newState[server.id] = server;
      // }
      // return newState;
      // debugger;
      for (let server of action.data.servers) {
        newState.enrolledServers[server.id] = server;
      }
      return newState;
    case RECEIVE_SERVERS:
      // debugger;
      for (let server of action.servers) {
        if (!newState.enrolledServers[server.id]) {
          newState.nonEnrolledServers[server.id] = server;
        }
      }
      // debugger;
      return newState;
    case RECEIVE_SERVER:
      // debugger;
      if (!!newState.enrolledServers[action.data.server.id]) {
        // debugger;
        newState.enrolledServers[action.data.server.id] = action.data.server;
        return newState;
      } else if (
        !newState.enrolledServers[action.data.server.id] &&
        action.data.serverMember
      ) {
        // debugger;
        newState.enrolledServers[action.data.server.id] = action.data.server;
        return newState;
      }
    // newState[action.data.server.id] = action.data.server;
    // return newState;
    case REMOVE_SERVER:
      // delete newState[action.serverId];
      // return newState;
      // debugger;
      delete newState.enrolledServers[action.serverId];
      // debugger;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default serversReducer;
