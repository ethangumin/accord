import * as ServersApiUtil from "../util/server_api_util";

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
  servers: servers,
});

const receiveServer = (data) => ({
  type: RECEIVE_SERVER,
  data: data,
});

const removeServer = (serverId) => ({
  type: REMOVE_SERVER,
  serverId: serverId,
});

export const requestServers = () => (dispatch) =>
  ServersApiUtil.fetchServers().then((servers) =>
    dispatch(receiveServers(servers))
  );

export const requestServer = (serverId) => (dispatch) =>
  ServersApiUtil.fetchServer(serverId).then((server) =>
    dispatch(receiveServer(server))
  );

export const createServer = (server) => (dispatch) =>
  ServersApiUtil.createServer(server).then((server) =>
    dispatch(receiveServer(server))
  );

export const updateServer = (server) => (dispatch) =>
  ServersApiUtil.updateServer(server).then((server) =>
    dispatch(receiveServer(server))
  );

export const deleteServer = (serverId) => (dispatch) =>
  ServersApiUtil.deleteServer(serverId).then(() =>
    dispatch(removeServer(serverId))
  );
