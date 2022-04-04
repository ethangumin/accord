// export const fetchConversations = () =>
//   $.ajax({
//     url: "/api/conversations",
//   });

export const fetchConversation = (user2Id) =>
  $.ajax({
    url: `/api/conversations/${user2Id}`,
  });

export const createConversation = (conversation) =>
  $.ajax({
    url: "/api/conversations",
    method: "POST",
    data: { conversation },
  });
