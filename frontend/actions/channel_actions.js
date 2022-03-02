import * as ChannelApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel: channel,
});

export const fetchChannel = (channelId) => (dispatch) =>
  ChannelApiUtil.fetchChannel(channelId).then((channel) =>
    dispatch(receiveChannel(channel))
  );
