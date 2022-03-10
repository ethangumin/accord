import * as ChannelApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel: channel,
});

const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  channelId: channelId,
});

export const fetchChannel = (channelId) => (dispatch) =>
  ChannelApiUtil.fetchChannel(channelId).then((channel) =>
    dispatch(receiveChannel(channel))
  );

export const createChannel = (channel) => (dispatch) =>
  ChannelApiUtil.createChannel(channel).then((channel) =>
    dispatch(receiveChannel(channel))
  );

export const deleteChannel = (channelId) => (dispatch) =>
  ChannelApiUtil.deleteChannel(channelId).then((channel) =>
    dispatch(removeChannel(channel.id))
  );

export const updateChannel = (channel) => (dispatch) =>
  ChannelApiUtil.updateChannel(channel).then((channel) =>
    dispatch(receiveChannel(channel))
  );
