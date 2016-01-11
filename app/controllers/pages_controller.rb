class PagesController < ApplicationController
  include Emailable

  def home
  end

  def subscribe_email
    if params[:email].present?
      options = {
        to: params[:email],
        to_name: '',
        template_id: Figaro.env.sendgrid_subscription_email_id,
        substitutions: {
          '-email-': params[:email]
        }
      }
      setup_email_info_and_send_email(options)
      list = List.new(list_params)
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private
    def list_params
      params.require(:list).permit(:email)
    end
end