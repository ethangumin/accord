class Api::ServersController < ApplicationController
    def create
        @server = Server.new(server_params)
        @server.creator_id = current_user.id
        if @server.save
            render :show
        else
            render json: ["Invalid Server Params"], status: 404
        end
    end

    # def show
    #     @server = Server.find_by(id: params[:id]);
    # end

    private
    def server_params
        params.require(:server).permit(:server_name)
    end
end