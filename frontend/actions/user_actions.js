import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (data) => {
  return {
    type: RECEIVE_USER,
    data: data,
  };
};

export const fetchUser = (userId) => (dispatch) =>
  UserApiUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)));
