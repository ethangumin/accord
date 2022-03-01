class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def show
        @server = Server.find_by(id: params[:id])
        if @server
            render :show
        else
            render json: ["Server does not exists"], status: 404
        end
    end

    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        if @server.save
            render :show
        else
            render json: ["Invalid Server Params"], status: 404
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