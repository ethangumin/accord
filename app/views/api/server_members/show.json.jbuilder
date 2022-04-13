json.key_format! camelize: :lower

json.users do
    json.array! @users do |user|
        json.extract! user, :id, :username
    end
end