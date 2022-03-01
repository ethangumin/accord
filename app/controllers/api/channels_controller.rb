class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_message, status: 422
        end
    end

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

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:channel_name, :server_id)
    end
end