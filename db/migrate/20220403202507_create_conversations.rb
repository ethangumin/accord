class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.string :name, null: false
      t.integer :user1_id, null: false
      t.integer :user2_id, null: false

      t.timestamps
    end

    add_index :conversations, :user1_id
    add_index :conversations, :user2_id
    add_index :conversations, %i(user1_id user2_id), unique: true
  end
end
