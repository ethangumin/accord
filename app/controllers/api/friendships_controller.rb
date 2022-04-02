class Api::FriendshipsController < ApplicationController
    def create
        @friendship = Friendship.new({user2_id: params['otherUser']['otherUserId']})
        @user = current_user
        @friendship.user1_id = @user.id
        if @friendship.save
            render :show
        else
            render json: ["invalid user"]
        end
    end

    def destroy
    end
end