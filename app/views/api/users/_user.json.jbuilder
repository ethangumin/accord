json.key_format! camelize: :lower

json.extract! user, :id, :username, :email

# json.servers do
#     json.array! user.servers_enrolled do |server|
#         json.id server.id
#         json.server_name server.server_name
#         json.channels do
#             json.array! server.channels do |channel|
#                 json.id channel.id
#             end
#         end
#     end
# end

# json.friends do 
#     json.array! user.friends, :id, :username
# end
# json.servers do
#     json.array! user.servers do |server|
#         json.id server.id
#         json.server_name server.server_name
#     end
# end
# json.channels do
#     json.array! channels do |channel|
#         json.id channel.id
#         json.channel_name channel.channel_name
#         json.server_id channel.server_id
#     end
# end
