class UpdateConversations < ActiveRecord::Migration[5.2]
  def change
    remove_column :conversations, :name
  end
end
