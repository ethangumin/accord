class UpdateChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :server_id
    add_column :channels, :server_id, :integer
  end
end
