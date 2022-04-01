export const createServerMember = (serverMember) => {
  return $.ajax({
    url: "/api/server_members",
    method: "POST",
    data: { serverMember },
  });
};

export const deleteServerMember = (serverMember) => {
  return $.ajax({
    url: `/api/server_members/${serverMember.user_id}`,
    method: "DELETE",
    data: { serverMember },
  });
};
