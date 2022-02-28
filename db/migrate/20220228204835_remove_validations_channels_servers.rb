class RemoveValidationsChannelsServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :channel_name
    remove_column :servers, :server_name
    remove_column :servers, :creator_id

    add_column :channels, :channel_name, :string
    add_column :servers, :server_name, :string
    add_column :servers, :creator_id, :integer
  end
end
