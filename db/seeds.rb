# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users seeds
User.create(username: "guest", email: "guest@gmail.com", password: "password")

# servers seeds
Server.create(server_name: "guest's server", creator_id: 1)
Server.create(server_name: "guest_server_2", creator_id: 1)

# channels seeds
Channel.create(channel_name: "guest_channel_1", server_id: 1)
Channel.create(channel_name: "guest_channel_2", server_id: 1)
Channel.create(channel_name: "guest_channel_3", server_id: 2)