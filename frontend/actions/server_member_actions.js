import * as ServerMemberApiUtil from "../util/server_member_api_util";

export const RECEIVE_SERVER_MEMBER = "RECEIVE_SERVER_MEMBER";

const receiveServerMember = (serverMember) => ({
  type: RECEIVE_SERVER_MEMBER,
  serverMember,
});

export const createServerMember = (serverMember) => (dispatch) =>
  ServerMemberApiUtil.createServerMember(serverMember).then((serverMember) =>
    dispatch(receiveServerMember(serverMember))
  );
