json.key_format! camelize: :lower

json.friend do
    json.extract! @friend, :id, :username
end