class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            @servers = @user.servers_enrolled
            @channels = []

            @servers.each do |server|
                @channels << server.channels
            end
            
            @channels = @channels.flatten
            login!(@user)
            render "api/users/show.json.jbuilder"
        else
            render json: ["Invalid Email/Password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show.json.jbuilder"
        else
            render json: ["No User Logged In"], status: 404
        end
    end
end