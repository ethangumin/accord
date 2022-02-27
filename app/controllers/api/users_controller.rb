class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            # debugger
            render :show
        else
            render json: ["Invalid Email/Username/Password"], status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end