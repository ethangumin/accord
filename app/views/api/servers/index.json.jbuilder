# json.array! @servers, partial: '/api/servers/server', as: :server

json.key_format! camelize: :lower

json.array! @servers do |server|
    json.id server.id
    json.server_name server.server_name
    json.creator_id server.creator_id
end