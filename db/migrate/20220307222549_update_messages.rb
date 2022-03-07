class UpdateMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :sender_username, :string
  end
end
