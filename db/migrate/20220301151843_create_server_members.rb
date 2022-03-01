class CreateServerMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_members do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end

    add_index :server_members, :user_id
    add_index :server_members, :server_id
    add_index :server_members, %i(user_id server_id), unique: true
  end
end
