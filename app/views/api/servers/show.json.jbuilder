json.key_format! camelize: :lower

json.server do 
    json.extract! @server, :id, :server_name, :creator_id
end
json.channel do
    if @channel
        json.extract! @channel, :id, :channel_name, :server_id
    end
end
json.server_member do
    if @server_member
        json.extract! @server_member, :id, :server_id, :user_id
    end
end