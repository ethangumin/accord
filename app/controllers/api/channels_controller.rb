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
        # debugger
        @channel = Channel.find_by(id: params[:id])
        if @channel
            # @messages = @channel.messages
            render :show
        else
            render json: ["Server does not exists"], status: 404
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel
            @channel.destroy
            render :show
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel && @channel.update(channel_params)
            render :show
        else
            render json: ["Channel name must be at least one character long"], status: 400
        end
    end

    private
    def channel_params
        params.require(:channel).permit(:channel_name, :server_id)
    end
end