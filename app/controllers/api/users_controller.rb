class Api::UsersController < ApplicationController
    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ["No user found"], status: 404
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
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