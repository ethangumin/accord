class Api::ServerMembersController < ApplicationController
    def create
        # debugger
        @server_member = ServerMember.new({server_id: params['serverMember']['server_id']})
        @user = current_user
        @server_member.user_id = @user.id
        # debugger
        if @server_member.save
            render "api/users/show.json.jbuilder"
        else
            render json: ["invalid server_id"], status: 404
        end
    end

    # private
    # def server_member_params
    #     debugger
    #     params.require(:server_member).permit(:server_id)
    # end
end