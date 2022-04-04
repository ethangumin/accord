class UpdateConversationMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :conversation_messages, :sender_username, :string
  end
end
