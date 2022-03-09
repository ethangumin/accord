json.key_format! camelize: :lower

# debugger;
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


# json.channels do
#     json.array @channels do |channel|
#         json.extract! channel, :id
#     end
# end
# json.channels1 do
#     json.array! @server.channels, :id, :channel_name, :server_id
# end
# json.members do
#     json.array! @server.members, :id, :username
# end


