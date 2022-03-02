export const fetchChannel = (channelId) =>
  $.ajax({
    url: `/api/channels/${channelId}`,
  });
