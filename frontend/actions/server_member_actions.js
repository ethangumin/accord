import * as ServerMemberApiUtil from "../util/server_member_api_util";

export const RECEIVE_SERVER_MEMBER = "RECEIVE_SERVER_MEMBER";
export const REMOVE_SERVER_MEMBER = "REMOVE_SERVER_MEMBER";

const receiveServerMember = (serverMember) => ({
  type: RECEIVE_SERVER_MEMBER,
  serverMember,
});

const removeServerMember = (serverMember) => ({
  type: REMOVE_SERVER_MEMBER,
  serverMember,
});

export const createServerMember = (serverMember) => (dispatch) =>
  ServerMemberApiUtil.createServerMember(serverMember).then((serverMember) =>
    dispatch(receiveServerMember(serverMember))
  );

export const deleteServerMember = (serverMember) => (dispatch) =>
  ServerMemberApiUtil.deleteServerMember(serverMember).then((serverMember) =>
    dispatch(removeServerMember(serverMember))
  );
