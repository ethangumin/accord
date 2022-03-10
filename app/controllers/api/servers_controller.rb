class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
        if @server
            @channels = @server.channels
            render :show
        else
            render json: ["Server does not exists"], status: 404
        end
    end

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        if @server.save
            @channel = Channel.new(channel_name: "General", server_id: @server.id)
            @server_member = ServerMember.new(server_id: @server.id, user_id: current_user.id)
            if @channel.save && @server_member.save
                render :show
            else
                render json: ["Invalid Server Params"], status: 404
            end
        end
    end

    def update
        @server = Server.find_by(id: params[:id])
        if @server && @server.update(server_params)
            render :show
        else
            render json: ["Server name must be at least one character long"], status: 400
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if @server
            @server.destroy
        end
    end

    private
    def server_params
        params.require(:server).permit(:server_name)
    end
end