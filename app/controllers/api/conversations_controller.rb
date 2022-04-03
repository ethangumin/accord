class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render :index
    end

    def show
        @conversation = Conversation.find_by(id: params[:id])
        if @conversation
            render :show
        else
            render json: ["Convesation does not exists"], status: 404
        end
    end

    def create
        @conversation = Conversation.new({user2_id: params['user2Id']})
        @user_2 = User.find_by(id: params['user2Id'])
        @user = current_user
        @conversation.user1_id = @user.id
        if @conversation.save
            render :show
        else
            render json: ["failure"]
        end
    end
end