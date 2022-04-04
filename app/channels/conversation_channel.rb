class ConversationChannel < ApplicationCable::Channel
  def subscribed
    stream_for "conversation_channel_#{params['conversationId']}"
    self.load
  end

  def speak(data)
    # debugger
    message = ConversationMessage.create(data["message"])
    socket = { message: message, type: "message" }
    ConversationChannel.broadcast_to("conversation_channel_#{params['conversationId']}", socket)
  end

  def load
    currentConversation = Conversation.find(params['conversationId'])
    messages = currentConversation.messages.all
    socket = { messages: messages, type: "messages" }
    ConversationChannel.broadcast_to("conversation_channel_#{params['conversationId']}", socket)
  end

  def update(data)
    message = ConversationMessage.find(data['message']['id'])
    message.update(body: data['message']['body'])
    socket = { message: message, type: "message" }
    ConversationChannel.broadcast_to("conversation_channel_#{params['conversationId']}", socket)
  end

  def destroy(data)
    message = ConversationMessage.find(data['messageId'])
    if message
      message.destroy
      socket = { message: message, type: "destroy" }
      ConversationChannel.broadcast_to("conversation_channel_#{params['conversationId']}", socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end
end
