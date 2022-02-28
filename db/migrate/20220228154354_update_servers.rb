class UpdateServers < ActiveRecord::Migration[5.2]
  def change
    add_index :servers, :creator_id
  end
end
