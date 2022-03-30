import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../actions/server_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let servers = action.data.servers;
      for (let server of servers) {
        newState[server.id] = server;
      }
      return newState;
    case RECEIVE_USER:
      // temporary
      newState = {};
      let currServers = action.data.servers;
      for (let server of currServers) {
        newState[server.id] = server;
      }
      return newState;
    case RECEIVE_SERVERS:
      newState = {};
      for (let server of action.servers) {
        newState[server.id] = server;
      }
      return newState;
    // return action.servers;
    case RECEIVE_SERVER:
      newState[action.data.server.id] = action.data.server;
      return newState;
    case REMOVE_SERVER:
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};

export default serversReducer;
