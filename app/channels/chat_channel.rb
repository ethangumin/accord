class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel_#{params['channelId']}"
  end

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

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
