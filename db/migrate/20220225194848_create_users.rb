class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :server_name, null: false, unique: true
      t.integer :creator_id, null: false, unique: true

      t.timestamps
    end

    add_index :users, :server_name, unique: true
    add_index :users, :creator_id, unique: true
  end
end
