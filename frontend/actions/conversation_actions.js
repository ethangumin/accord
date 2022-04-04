import * as ConversationApiUtil from "../util/conversation_api_util";

// export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

// const receive_conversations = (conversations) => ({
//   type: RECEIVE_CONVERSATIONS,
//   conversations,
// });

const receive_conversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation,
});

// export const fetchConversations = () => (dispatch) => {
//   return ConversationApiUtil.fetchConversations().then((conversations) =>
//     dispatch(receive_conversations(conversations))
//   );
// };

export const fetchConversation = (user2Id) => (dispatch) => {
  return ConversationApiUtil.fetchConversation(user2Id).then((conversation) =>
    dispatch(receive_conversation(conversation))
  );
};

export const createConversation = (conversation) => (dispatch) => {
  return ConversationApiUtil.createConversation(conversation).then(
    (conversation) => dispatch(receive_conversation(conversation))
  );
};
