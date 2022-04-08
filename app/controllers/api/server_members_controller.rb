class Api::ServerMembersController < ApplicationController
    def create
        # debugger
        @server_member = ServerMember.new({server_id: params['serverMember']['server_id']})
        @user = current_user
        @server_member.user_id = @user.id
        if @server_member.save
            render json: params['serverMember']['server_id']
        else
            render json: ["invalid server_id"], status: 404
        end
    end

    def show
        @server_members = ServerMember.where(server_id: params[:id])
        @users = []
        @server_members.each do |server_member|
            user = User.find(server_member.user_id)
            @users << user
        end
        render :show
    end

    def destroy
        @server_member = ServerMember.where(user_id: params['serverMember']['user_id'])
            .where(server_id: params['serverMember']['server_id'])
        if ServerMember.destroy(@server_member[0].id)
            render json: params['serverMember']['server_id']
        else
            render json: ["failure"]
        end
    end
end