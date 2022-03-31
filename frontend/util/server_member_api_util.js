export const createServerMember = (serverMember) => {
  return $.ajax({
    url: "/api/server_members",
    method: "POST",
    data: { serverMember },
  });
};

// export const deleteServerMember = (serverMember) => {
//   debugger;
//   return $.ajax({
//     url: "/api/server_members",
//     method: "DELETE",
//     data: { serverMember },
//   });
// };
