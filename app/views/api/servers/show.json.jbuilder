# json.partial! "api/servers/server", server: @server, channels: @channels

json.key_format! camelize: :lower

json.extract! @server, :id, :server_name, :creator_id
json.channels do
    json.array! @server.channels, :id, :channel_name, :server_id
end
