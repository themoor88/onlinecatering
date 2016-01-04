Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/custom_devise/registrations'
  }

  devise_for :caterers, controllers: {
    registrations: 'caterers/custom_devise/registrations'
  }

  root 'pages#home'
  post '/subscribe' => 'pages#subscribe_email'

  devise_scope :user do

    namespace :users do
      get '/profile' => 'dashboard#profile', as: 'profile'
      resources :orders
    end
  end

  devise_scope :caterer do
    namespace :caterers do
      get '/profile' => 'dashboard#profile', as: 'profile'
      resources :food_items
    end
  end
end
