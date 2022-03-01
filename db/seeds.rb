# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users seeds
User.create(username: "guest", email: "guest@gmail.com", password: "password")
User.create(username: "Emily", email: "emily@gmail.com", password: "password")
User.create(username: "Kevin", email: "kevin@gmail.com", password: "password")
User.create(username: "Kirby", email: "kirby@gmail.com", password: "password")

# servers seeds
Server.create(server_name: "Guest Server 1", creator_id: 1)
Server.create(server_name: "Guest Server 2", creator_id: 1)
Server.create(server_name: "Emily Server 1", creator_id: 2)
Server.create(server_name: "Emily Server 2", creator_id: 2)
Server.create(server_name: "Emily Server 3", creator_id: 2)
Server.create(server_name: "Kevin Server 1", creator_id: 3)
Server.create(server_name: "Kirby Server 1", creator_id: 4)
Server.create(server_name: "Kirby Server 1", creator_id: 4)
Server.create(server_name: "Kirby Server 1", creator_id: 4)
Server.create(server_name: "Kirby Server 1", creator_id: 4)

# channels seeds
Channel.create(channel_name: "Guest Channel 1", server_id: 1)
Channel.create(channel_name: "Guest Channel 2", server_id: 1)
Channel.create(channel_name: "Guest Channel 3", server_id: 2)
Channel.create(channel_name: "Emily Channel 1", server_id: 3)
Channel.create(channel_name: "Emily Channel 2", server_id: 3)
Channel.create(channel_name: "Emily Channel 3", server_id: 3)
Channel.create(channel_name: "Emily Channel 4", server_id: 4)
Channel.create(channel_name: "Emily Channel 5", server_id: 5)
Channel.create(channel_name: "Emily Channel 6", server_id: 5)
Channel.create(channel_name: "Kevin Channel 1", server_id: 6)
Channel.create(channel_name: "Kevin Channel 2", server_id: 6)
Channel.create(channel_name: "Kirby Channel 1", server_id: 7)
Channel.create(channel_name: "Kirby Channel 2", server_id: 8)
Channel.create(channel_name: "Kirby Channel 3", server_id: 9)
Channel.create(channel_name: "Kirby Channel 4", server_id: 10)
Channel.create(channel_name: "Kirby Channel 5", server_id: 10)