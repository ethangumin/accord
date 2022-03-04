class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    # debugger
    message = Message.create(data["message"])
    socket = { message: message, type: "message" }
    ChatChannel.broadcast_to("chat_channel", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
