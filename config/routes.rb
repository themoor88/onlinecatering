Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/custom_devise/registrations'
  }
  devise_for :caterers, controllers: {
    registrations: 'caterers/custom_devise/registrations'
  }
  root 'pages#home'
  post '/subscribe' => 'pages#subscribe_email'
end
