class AddDbConstraintsServersChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :channel_name
    remove_column :channels, :server_id
    remove_column :servers, :server_name
    remove_column :servers, :creator_id

    add_column :channels, :channel_name, :string, null: false
    add_column :channels, :server_id, :integer, null: false
    add_column :servers, :server_name, :string, null: false
    add_column :servers, :creator_id, :integer, null: false

    add_index :channels, :server_id
    add_index :servers, :creator_id
  end
end
