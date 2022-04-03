class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :conversations,
        primary_key: :id,
        foreign_key: :user1_id,
        class_name: :Conversation

    has_many :friendships,
        primary_key: :id,
        foreign_key: :user1_id,
        class_name: :Friendship

    has_many :friends,
        through: :friendships,
        source: :user2

    has_many :servers,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :Server

    has_many :server_members,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :ServerMember

    has_many :servers_enrolled,
        through: :server_members,
        source: :server

    has_many :channel_messages,
        primary_key: :id,
        foreign_key: :sender_id,
        class_name: :Message

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
