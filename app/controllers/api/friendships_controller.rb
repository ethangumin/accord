class Api::FriendshipsController < ApplicationController
    def create
        @friendship = Friendship.new({user2_id: params['user2Id']})
        @friend = User.find_by(id: params['user2Id'])
        @user = current_user
        @friendship.user1_id = @user.id
        if @friendship.save
            render :show
        else
            render json: ["invalid user"]
        end
    end

    def destroy
        @friendship = Friendship.where(user1_id: current_user.id).where(user2_id: params[:id])
        if @friendship[0].destroy
            render json: [params[:id]]
        else
            render json: ["failure"]
        end
    end
end