export const RECEIVE_CONVERSATION_MESSAGE = "RECEIVE_CONVERSATION_MESSAGE";
export const REMOVE_CONVERSATION_MESSAGE = "REMOVE_CONVERSATION_MESSAGE";
export const RECEIVE_CONVERSATION_MESSAGES = "RECEIVE_CONVERSATION_MESSAGES";

export const receiveConversationMessage = (message) => ({
  type: RECEIVE_CONVERSATION_MESSAGE,
  message: message,
});

export const receiveConversationMessages = (messages) => ({
  type: RECEIVE_CONVERSATION_MESSAGES,
  messages: messages,
});

export const removeConversationMessage = (messageId) => ({
  type: REMOVE_CONVERSATION_MESSAGE,
  messageId: messageId,
});
