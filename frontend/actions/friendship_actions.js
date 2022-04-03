import * as FriendshipApiUtil from "../util/friendship_api_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
});

const removeFriendship = (data) => ({
  type: REMOVE_FRIENDSHIP,
  data: data,
});

export const createFriendship = (user2Id) => (dispatch) => {
  return FriendshipApiUtil.addFriend(user2Id).then((friendship) =>
    dispatch(receiveFriendship(friendship))
  );
};

export const deleteFriendship = (user2Id) => (dispatch) => {
  return FriendshipApiUtil.removeFriend(user2Id).then((res) =>
    dispatch(removeFriendship(res))
  );
};
