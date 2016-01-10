class PagesController < ApplicationController
  # include Emailable

  def home
  end

  def subscribe_email
    lists_obj = SendgridToolkit::Lists.new('onlinecatering', 'onlinecatering123')
    response = lists_obj.add list: 'subscribers3', data: {email: 'wjkagzi@gmail.com', name: 'Wajid'}
    # SendgridToolkit::Mail.new('onlinecatering', 'onlinecatering123').send_mail :to => "wjkagzi@dgmail.com", :from => "admin@onlinecatering.es", :subject => "Some Subject", :text => "Some text"
    render json: {success: true}
  end
end
