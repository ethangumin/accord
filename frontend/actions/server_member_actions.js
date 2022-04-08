import * as ServerMemberApiUtil from "../util/server_member_api_util";

export const RECEIVE_SERVER_MEMBER = "RECEIVE_SERVER_MEMBER";
export const REMOVE_SERVER_MEMBER = "REMOVE_SERVER_MEMBER";
export const RECEIVE_SERVER_MEMBERS = "RECEIVE_SERVER_MEMBERS";

const receiveServerMember = (serverMember) => ({
  type: RECEIVE_SERVER_MEMBER,
  serverMember,
});

const removeServerMember = (serverMember) => ({
  type: REMOVE_SERVER_MEMBER,
  serverMember,
});

const receiveServerMembers = (serverMembers) => ({
  type: RECEIVE_SERVER_MEMBERS,
  serverMembers,
});

export const createServerMember = (serverMember) => (dispatch) =>
  ServerMemberApiUtil.createServerMember(serverMember).then((serverMember) =>
    dispatch(receiveServerMember(serverMember))
  );

export const deleteServerMember = (serverMember) => (dispatch) =>
  ServerMemberApiUtil.deleteServerMember(serverMember).then((serverMember) =>
    dispatch(removeServerMember(serverMember))
  );

export const fetchServerMembers = (serverId) => (dispatch) =>
  ServerMemberApiUtil.fetchServerMembers(serverId).then((serverMembers) =>
    dispatch(receiveServerMembers(serverMembers))
  );
