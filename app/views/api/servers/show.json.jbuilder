json.key_format! camelize: :lower

json.server do 
    json.extract! @server, :id, :server_name, :creator_id
end

json.channels do 
    json.array! @channels do |channel|
        json.id channel.id
        json.channel_name channel.channel_name
        json.server_id channel.server_id
    end
end

json.server_member do
    if @server_member
        json.extract! @server_member, :id, :server_id, :user_id
    end
    # json.array! @server_members do |member|
    #     json.id channel.id
    # end
end