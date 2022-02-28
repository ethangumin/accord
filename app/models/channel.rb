class Channel < ApplicationRecord
    validates :channel_name, :server_id, presence: true

    belongs_to :server,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Server
end
