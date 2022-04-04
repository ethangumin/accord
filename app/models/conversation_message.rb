class ConversationMessage < ApplicationRecord
    validates :sender_id, :conversation_id, :body, presence: true

    belongs_to :sender,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :conversation,
        primary_key: :id,
        foreign_key: :conversation_id,
        class_name: :Conversation

    def created_at
        attributes['created_at'].strftime("%m/%d/%Y %H:%M")
    end
end
