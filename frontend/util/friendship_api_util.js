export const addFriend = (user2Id) => {
  return $.ajax({
    url: "/api/friendships",
    method: "POST",
    data: { user2Id},
  });
};

export const removeFriend = (user2Id) => {
  return $.ajax({
    url: `/api/friendships/${user2Id}`,
    method: "DELETE",
  });
};
