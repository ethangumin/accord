class Api::ChannelsController < ApplicationController
    # def create
    #     @channel = Channel.new(channel_params)

    # end

    def show
        @channel = Channel.find_by(id: params[:id])
        if @channel
            render :show
        else
            render json: ["Server does not exists"], status: 404
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:channel_name)
    end
end