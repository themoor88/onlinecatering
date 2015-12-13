class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def home
  end

  def subscribe_email
    mailchimp = Mailchimp::API.new(Figaro.env.mailchimp_api_key)
    mailchimp.lists.subscribe(Figaro.env.mailchimp_caterers_list_id,
       {email: params[:email][:address]}
    )
  end
end
