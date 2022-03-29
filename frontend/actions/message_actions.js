export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message,
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages: messages,
});

export const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId: messageId,
});
