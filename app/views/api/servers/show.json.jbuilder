json.key_format! camelize: :lower

json.extract! @server, :id, :server_name, :creator_id
json.channels do
    json.array @channels do |channel|
        json.extract! channel, :id
    end
end
# json.channels1 do
#     json.array! @server.channels, :id, :channel_name, :server_id
# end
# json.members do
#     json.array! @server.members, :id, :username
# end


