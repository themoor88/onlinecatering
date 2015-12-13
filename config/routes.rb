Rails.application.routes.draw do
  root 'pages#home'
  post '/subscribe' => 'pages#subscribe_email'
end
