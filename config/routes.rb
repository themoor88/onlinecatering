Rails.application.routes.draw do
  devise_for :users
  devise_for :caterers
  root 'pages#home'
  post '/subscribe' => 'pages#subscribe_email'
end
