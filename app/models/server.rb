class Server < ApplicationRecord
    validates :server_name, :creator_id, presence: true

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :channels,
        primary_key: :id,
        foreign_key: :server_id,
        class_name: :Channel
end