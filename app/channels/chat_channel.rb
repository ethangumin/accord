class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for `chat_channel_#{params['channelId']}`
  end

  def speak(data)
    # debugger
    message = Message.create(data["message"])
    socket = { message: message, type: "message" }
    # specify channel
    ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
  end

  def load
    messages = Channel.messages.all.collect(&:body)
    socket = { messages: messages, type: "messages" }
    # specify channel
    ChatChannel.broadcast_to(`chat_channel_#{params['channelId']}`, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
