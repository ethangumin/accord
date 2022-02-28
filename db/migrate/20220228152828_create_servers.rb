class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
  end
end
