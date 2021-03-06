# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users seeds
User.create(username: "Guest", email: "guest@gmail.com", password: "password")
User.create(username: "Emily", email: "emily@gmail.com", password: "password")
User.create(username: "Kevin", email: "kevin@gmail.com", password: "password")
User.create(username: "Kirby", email: "kirby@gmail.com", password: "password")
User.create(username: "americantrounce", email: "americantrounce@gmail.com", password: "password")
User.create(username: "plastererstop", email: "plastererstop@gmail.com", password: "password")
User.create(username: "dressingliterally", email: "dressingliterally@gmail.com", password: "password")
User.create(username: "stewhelpful", email: "stewhelpful@gmail.com", password: "password")
User.create(username: "torchyellow", email: "torchyellow@gmail.com", password: "password")
User.create(username: "froggerybusy", email: "froggerybusy@gmail.com", password: "password")
User.create(username: "patheticfireworks", email: "patheticfireworks@gmail.com", password: "password")
User.create(username: "breezyleg", email: "breezyleg@gmail.com", password: "password")
User.create(username: "boatpropose", email: "boatpropose@gmail.com", password: "password")
User.create(username: "tykehall", email: "tykehall@gmail.com", password: "password")
User.create(username: "agedstorm", email: "agedstorm@gmail.com", password: "password")
User.create(username: "coralhoglin", email: "coralhoglin@gmail.com", password: "password")
User.create(username: "corianderfaith", email: "corianderfaith@gmail.com", password: "password")
User.create(username: "humclosely", email: "humclosely@gmail.com", password: "password")
User.create(username: "chirpextraneous", email: "chirpextraneous@gmail.com", password: "password")
User.create(username: "chidegray", email: "chidegray@gmail.com", password: "password")
User.create(username: "volarycreation", email: "volarycreation@gmail.com", password: "password")

# servers seeds
Server.create(server_name: "Guest Server 1", creator_id: 1)
Server.create(server_name: "Guest Server 2", creator_id: 1)
Server.create(server_name: "Emily Server 1", creator_id: 2)
Server.create(server_name: "Emily Server 2", creator_id: 2)
Server.create(server_name: "Emily Server 3", creator_id: 2)
Server.create(server_name: "Kevin Server 1", creator_id: 3)
Server.create(server_name: "Kirby Server 1", creator_id: 4)
Server.create(server_name: "Kirby Server 2", creator_id: 4)
Server.create(server_name: "Kirby Server 3", creator_id: 4)
Server.create(server_name: "Kirby Server 4", creator_id: 4)

Server.create(server_name: "Bridge Fibers", creator_id: 5)
Server.create(server_name: "Denmark Fashion Club", creator_id: 6)
Server.create(server_name: "Creative Minds", creator_id: 7)
Server.create(server_name: "Funny Ness", creator_id: 8)
Server.create(server_name: "Famous Skyliners", creator_id: 9)
Server.create(server_name: "Rise Hosting", creator_id: 10)
Server.create(server_name: "Blasters", creator_id: 11)
Server.create(server_name: "Bluestorm iGaming", creator_id: 12)
Server.create(server_name: "Clever Girls Only", creator_id: 13)
Server.create(server_name: "Chevrolet Lovers", creator_id: 14)

# channels seeds
Channel.create(channel_name: "General", server_id: 1)
Channel.create(channel_name: "Guest Channel 1", server_id: 1)
Channel.create(channel_name: "Guest Channel 2", server_id: 1)
Channel.create(channel_name: "General", server_id: 2)
Channel.create(channel_name: "Guest Channel 3", server_id: 2)
Channel.create(channel_name: "General", server_id: 3)
Channel.create(channel_name: "Emily Channel 1", server_id: 3)
Channel.create(channel_name: "Emily Channel 2", server_id: 3)
Channel.create(channel_name: "Emily Channel 3", server_id: 3)
Channel.create(channel_name: "General", server_id: 4)
Channel.create(channel_name: "Emily Channel 4", server_id: 4)
Channel.create(channel_name: "General", server_id: 5)
Channel.create(channel_name: "Emily Channel 5", server_id: 5)
Channel.create(channel_name: "Emily Channel 6", server_id: 5)
Channel.create(channel_name: "General", server_id: 6)
Channel.create(channel_name: "Kevin Channel 1", server_id: 6)
Channel.create(channel_name: "Kevin Channel 2", server_id: 6)
Channel.create(channel_name: "General", server_id: 7)
Channel.create(channel_name: "Kirby Channel 1", server_id: 7)
Channel.create(channel_name: "General", server_id: 8)
Channel.create(channel_name: "Kirby Channel 2", server_id: 8)
Channel.create(channel_name: "General", server_id: 9)
Channel.create(channel_name: "Kirby Channel 3", server_id: 9)
Channel.create(channel_name: "General", server_id: 10)
Channel.create(channel_name: "Kirby Channel 4", server_id: 10)
Channel.create(channel_name: "Kirby Channel 5", server_id: 10)

Channel.create(channel_name: "General", server_id: 11)
Channel.create(channel_name: "Chill-1", server_id: 11)
Channel.create(channel_name: "General", server_id: 12)
Channel.create(channel_name: "Among Us", server_id: 12)
Channel.create(channel_name: "off-topic", server_id: 12)
Channel.create(channel_name: "General", server_id: 13)
Channel.create(channel_name: "lounge", server_id: 13)
Channel.create(channel_name: "tradees", server_id: 13)
Channel.create(channel_name: "General", server_id: 14)
Channel.create(channel_name: "Dank-Memes", server_id: 14)
Channel.create(channel_name: "current-games", server_id: 14)
Channel.create(channel_name: "General", server_id: 15)
Channel.create(channel_name: "designs", server_id: 15)
Channel.create(channel_name: "ideas-suggestions", server_id: 15)
Channel.create(channel_name: "General", server_id: 16)
Channel.create(channel_name: "rewards", server_id: 16)
Channel.create(channel_name: "planning", server_id: 16)
Channel.create(channel_name: "General", server_id: 17)
Channel.create(channel_name: "blogs", server_id: 17)
Channel.create(channel_name: "mindfully-speaking", server_id: 17)
Channel.create(channel_name: "General", server_id: 18)
Channel.create(channel_name: "making-us-laugh", server_id: 18)
Channel.create(channel_name: "emoji-suggestions", server_id: 18)
Channel.create(channel_name: "General", server_id: 19)
Channel.create(channel_name: "art-discussion", server_id: 19)
Channel.create(channel_name: "life-share", server_id: 19)
Channel.create(channel_name: "General", server_id: 20)
Channel.create(channel_name: "memes", server_id: 20)
Channel.create(channel_name: "gaming", server_id: 20)
Channel.create(channel_name: "music", server_id: 20)

# server_members seeds
ServerMember.create(user_id: 1, server_id: 1)
ServerMember.create(user_id: 1, server_id: 4)
ServerMember.create(user_id: 1, server_id: 7)
ServerMember.create(user_id: 1, server_id: 8)
ServerMember.create(user_id: 1, server_id: 11)
ServerMember.create(user_id: 1, server_id: 13)
ServerMember.create(user_id: 1, server_id: 15)
ServerMember.create(user_id: 1, server_id: 19)
ServerMember.create(user_id: 2, server_id: 15)
ServerMember.create(user_id: 2, server_id: 4)
ServerMember.create(user_id: 2, server_id: 5)
ServerMember.create(user_id: 2, server_id: 1)
ServerMember.create(user_id: 2, server_id: 2)
ServerMember.create(user_id: 2, server_id: 10)
ServerMember.create(user_id: 2, server_id: 6)
ServerMember.create(user_id: 3, server_id: 1)
ServerMember.create(user_id: 3, server_id: 6)
ServerMember.create(user_id: 3, server_id: 8)
ServerMember.create(user_id: 4, server_id: 7)
ServerMember.create(user_id: 4, server_id: 8)
ServerMember.create(user_id: 4, server_id: 9)
ServerMember.create(user_id: 4, server_id: 10)
ServerMember.create(user_id: 4, server_id: 1)
ServerMember.create(user_id: 4, server_id: 2)
ServerMember.create(user_id: 4, server_id: 5)
ServerMember.create(user_id: 4, server_id: 3)
ServerMember.create(user_id: 4, server_id: 6)

ServerMember.create(user_id: 5, server_id: 1)
ServerMember.create(user_id: 6, server_id: 2)
ServerMember.create(user_id: 7, server_id: 3)
ServerMember.create(user_id: 8, server_id: 4)
ServerMember.create(user_id: 9, server_id: 5)
ServerMember.create(user_id: 10, server_id: 6)
ServerMember.create(user_id: 11, server_id: 7)
ServerMember.create(user_id: 12, server_id: 8)
ServerMember.create(user_id: 13, server_id: 9)
ServerMember.create(user_id: 14, server_id: 10)
ServerMember.create(user_id: 15, server_id: 11)
ServerMember.create(user_id: 16, server_id: 1)
ServerMember.create(user_id: 17, server_id: 2)
ServerMember.create(user_id: 18, server_id: 13)
ServerMember.create(user_id: 19, server_id: 15)
ServerMember.create(user_id: 20, server_id: 17)
ServerMember.create(user_id: 6, server_id: 19)
ServerMember.create(user_id: 8, server_id: 20)
ServerMember.create(user_id: 10, server_id: 16)
ServerMember.create(user_id: 11, server_id: 5)


# friendship seeds
Friendship.create(user1_id: 1, user2_id: 2)
Friendship.create(user1_id: 1, user2_id: 3)
Friendship.create(user1_id: 1, user2_id: 4)
Friendship.create(user1_id: 2, user2_id: 1)
Friendship.create(user1_id: 2, user2_id: 3)
Friendship.create(user1_id: 2, user2_id: 4)
Friendship.create(user1_id: 3, user2_id: 1)
Friendship.create(user1_id: 3, user2_id: 2)
Friendship.create(user1_id: 3, user2_id: 4)
Friendship.create(user1_id: 4, user2_id: 1)
Friendship.create(user1_id: 4, user2_id: 2)
Friendship.create(user1_id: 4, user2_id: 3)

Friendship.create(user1_id: 1, user2_id: 5)
Friendship.create(user1_id: 1, user2_id: 6)
Friendship.create(user1_id: 1, user2_id: 7)
Friendship.create(user1_id: 1, user2_id: 8)
Friendship.create(user1_id: 1, user2_id: 9)
Friendship.create(user1_id: 1, user2_id: 10)
Friendship.create(user1_id: 1, user2_id: 11)

# conversation seeds
Conversation.create(user1_id: 1, user2_id: 2)
Conversation.create(user1_id: 3, user2_id: 1)

Conversation.create(user1_id: 1, user2_id: 8)
Conversation.create(user1_id: 1, user2_id: 7)
Conversation.create(user1_id: 1, user2_id: 10)

# message seeds
Message.create(sender_id: 2, channel_id: 1, body: "Hey Hey!", sender_username: "Emily")
Message.create(sender_id: 3, channel_id: 1, body: "Hey Emily", sender_username: "Kevin")
Message.create(sender_id: 4, channel_id: 18, body: "Welcome to my server :D", sender_username: "Kirby")

# conversation message seeds
ConversationMessage.create(sender_id: 2, conversation_id: 1, body: "Hey Guest", sender_username: "Emily")
ConversationMessage.create(sender_id: 1, conversation_id: 1, body: "Hi Emily, how are you doing?", sender_username: "Guest")
ConversationMessage.create(sender_id: 2, conversation_id: 1, body: "I'm great, now that I'm on Accord!", sender_username: "Emily")

ConversationMessage.create(sender_id: 3, conversation_id: 2, body: "hey hey", sender_username: "Kevin")

