json.key_format! camelize: :lower

json.extract! @message, :id, :sender_id, :channel_id, :body