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

export const deleteChannel = (channelId) =>
  $.ajax({
    url: `/api/channels/${channelId}`,
    method: "DELETE",
  });

export const updateChannel = (channel) =>
  $.ajax({
    url: `/api/channels/${channel.id}`,
    method: "PATCH",
    data: { channel },
  });
