import * as MessageApiUtil from "../util/message_api_util";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message,
});

const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId: messageId,
});

export const sendMessage = (message) => (dispatch) =>
  MessageApiUtil.sendMessage(message).then((message) =>
    dispatch(receiveMessage(message))
  );

export const updateMessage = (message) => (dispatch) =>
  MessageApiUtil.updateMessage(message).then((message) =>
    dispatch(receiveMessage(message))
  );

export const deleteMessage = (messageId) => (dispatch) =>
  MessageApiUtil.deleteMessage(messageId).then(() =>
    dispatch(removeMessage(messageId))
  );
