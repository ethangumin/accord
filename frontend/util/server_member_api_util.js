export const createServerMember = (serverMember) => {
  return $.ajax({
    url: "/api/server_members",
    method: "POST",
    data: { serverMember },
  });
};
