# class Api::MessagesController < ApplicationController
#     def create
#         @message = Message.new(message_params)
#         if @message.save
#             render "api/messages/show.json.jbuilder"
#         else
#             render json: ["Invalid Message Parameters"], status: 404
#         end
#     end

#     def update
#         @message = Message.find_by(id: params[:id])
#         if @message && @message.update
#             render json: ["Message Update Success"]
#         else
#             render json: ["Update Message Unsuccessful"], status: 404
#         end
#     end

#     def destroy
#         @message = Message.find_by(id: params[:id])
#         if @message
#             @message.destroy
#         end
#     end

#     private
#     def message_params
#         params.require(:message).permit(:sender_id, :channel_id, :body)
#     end
# end