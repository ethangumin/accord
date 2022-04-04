import * as ConversationApiUtil from "../util/conversation_api_util";

export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

const receive_conversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation,
});

export const fetchConversation = (user2Id) => (dispatch) => {
  return ConversationApiUtil.fetchConversation(user2Id).then((conversation) =>
    dispatch(receive_conversation(conversation))
  );
};

export const createConversation = (user2Id) => (dispatch) => {
  return ConversationApiUtil.createConversation(user2Id).then(
    (conversation) => dispatch(receive_conversation(conversation))
  );
};
