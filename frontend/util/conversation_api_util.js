export const fetchConversation = (user2Id) =>
  $.ajax({
    url: `/api/conversations/${user2Id}`,
  });

export const createConversation = (user2Id) => {
  return $.ajax({
    url: "/api/conversations",
    method: "POST",
    data: { user2Id },
  });
}
