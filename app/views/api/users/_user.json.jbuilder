json.key_format! camelize: :lower

json.extract! user, :id, :username, :email
json.servers do
    json.array! user.servers_enrolled, :id, :server_name
end
json.friends do 
    json.array! user.friends, :id, :username
end