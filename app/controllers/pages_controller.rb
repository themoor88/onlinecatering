class PagesController < ApplicationController
  include Emailable

  def home
  end

  def index
  end

  def subscribe_email
    if params[:email].present?
      options = {
        to: 'admin@onlinecatering.es',
        to_name: '',
        template_id: Figaro.env.sendgrid_subscription_email_id,
        substitutions: {
          '-email-': params[:email]
        }
      }
      setup_email_info_and_send_email(options)
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

end