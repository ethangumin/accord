export const fetchChannel = (channelId) =>
  $.ajax({
    url: `/api/channels/${channelId}`,
  });

export const createChannel = (channel) =>
  $.ajax({
    url: "/api/channels",
    method: "POST",
    data: { channel },
  });
