class Api::UsersController < ApplicationController
    def show
        @user = User.find_by(id: params[:id])
        @other_user = User.find_by(username: params[:id])
        if @user
            @servers = @user.servers_enrolled
            @channels = []

            @servers.each do |server|
                @channels << server.channels
            end
            
            @channels = @channels.flatten

            @friends = @user.friends

            @conversations = []
            @conversations1 = Conversation.where(user1_id: params[:id])
            @conversations2 = Conversation.where(user2_id: params[:id])

            @conversations1.each do |conversation|
                @conversations << conversation
            end

            @conversations2.each do |conversation|
                @conversations << conversation
            end

            render :show
        elsif @other_user 
            @servers = [];
            @channels = [];
            @friends = [];
            @conversations = [];
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
        params.require(:user).permit(:email, :username, :password, :userId)
    end
end