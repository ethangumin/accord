# json.partial! "api/users/user", user: @user, servers: @servers, channels: @channels

json.key_format! camelize: :lower

if @user
    json.user do
        json.extract! @user, :id, :username, :email
    end 
    json.servers do
        json.array! @servers do |server|
            json.id server.id
            json.server_name server.server_name
            json.creator_id server.creator_id
        end
    end
    json.channels do
        json.array! @channels do |channel|
            json.id channel.id
            json.channel_name channel.channel_name
            json.server_id channel.server_id
        end
    end
    json.friends do 
        json.array! @friends do |friend|
            json.id friend.id
            json.username friend.username
        end
    end
else
    json.user do
        json.extract! @other_user, :id, :username
    end
    json.servers do
        json.array! @servers do |server|
            json.id server.id
            json.server_name server.server_name
            json.creator_id server.creator_id
        end
    end
    json.channels do
        json.array! @channels do |channel|
            json.id channel.id
            json.channel_name channel.channel_name
            json.server_id channel.server_id
        end
    end
    json.friends do 
        json.array! @friends do |friend|
            json.id friend.id
            json.username friend.username
        end
    end
end

