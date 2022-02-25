class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        redirect_to root_url unless logged_in?
    end

    def login!(user)
        user.reset_session_token
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout!
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end

    # def require_logged_in
    #     if !current_user
    #         render json: {error: ["invalid username/password"]}, status: 401
    #     end
    # end
end
