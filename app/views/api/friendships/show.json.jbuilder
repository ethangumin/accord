json.key_format! camelize: :lower

json.friendship do
    json.extract! @friendship :id, :user1_id, :user2_id
end