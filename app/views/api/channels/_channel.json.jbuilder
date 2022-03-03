json.key_format! camelize: :lower
json.extract! channel, :id, :channel_name, :server_id
json.messages do
    json.array! channel.messages, :id, :sender_id, :body
end