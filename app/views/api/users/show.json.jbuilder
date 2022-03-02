# json.partial! "api/users/user", user: @user

json.key_format! camelize: :lower

json.extract! @user, :id, :username, :email
json.servers do
    json.array! @user.servers_enrolled, :id, :server_name
end