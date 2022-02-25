class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            # render json: ["created #{@user.username}"]
            render :show
        else
            render json: ["Invalid Username/Password"], status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end