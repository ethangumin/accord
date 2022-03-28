class ChatChannel < ApplicationCable::Channel
  def subscribed
    # debugger
    stream_for "chat_channel_#{params['channelId']}"
    self.load
  end

  # def subscribed
  #   @chat = "chat_channel_#{params['channelId']}"
  #   stream_for @chat
  # end

  def speak(data)
    message = Message.create(data["message"])
    socket = { message: message, type: "message" }
    ChatChannel.broadcast_to("chat_channel_#{params['channelId']}", socket)
  end

  def load
    currentChannel = Channel.find(params['channelId'])
    messages = currentChannel.messages.all
    socket = { messages: messages, type: "messages" }
    ChatChannel.broadcast_to("chat_channel_#{params['channelId']}", socket)
  end

  def update

  end

  def destroy(data)
    # debugger
    message = Message.find(data['messageId'])
    if message
      message.destroy
      socket = { message: message, type: "destroy" }
      ChatChannel.broadcast_to("chat_channel_#{params['channelId']}", socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
