class Conversation < ApplicationRecord
    validates :user1_id, :user2_id, presence: true

    belongs_to :user1,
        primary_key: :id,
        foreign_key: :user1_id,
        class_name: :User

    belongs_to :user2,
        primary_key: :id,
        foreign_key: :user2_id,
        class_name: :User

    has_many :messages,
        primary_key: :id,
        foreign_key: :conversation_id,
        class_name: :ConversationMessage
end