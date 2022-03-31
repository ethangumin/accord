class Api::ServerMembersController < ApplicationController
    def create
        # debugger
        @server_member = ServerMember.new({server_id: params['serverMember']['server_id']})
        @user = current_user
        @server_member.user_id = @user.id
        if @server_member.save
            render json: ["placeholder"]
        else
            render json: ["invalid server_id"], status: 404
        end
    end

    # def destroy
    #     debugger
    #     # @user = current_user
    #     @server_member = ServerMember.select(:id)
    #         .where(user_id: params['serverMember']['user_id'])
    #         .where(server_id: params['serverMember']['server_id'])
    #     debugger
    #     if @server_member.destroy
    #         render json: ["success"]
    #     else
    #         render json: ["failure"]
    #     end
    # end
end