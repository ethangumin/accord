class Message < ApplicationRecord
    validates :sender_id, :channel_id, :body, presence: true

    belongs_to :sender,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :channel,
        primary_key: :id,
        foreign_key: :channel_id,
        class_name: :Channel

    def created_at
        attributes['created_at'].strftime("%m/%d/%Y %H:%M")
    end
end
