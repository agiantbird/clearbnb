Rails.application.routes.draw do
  namespace :host do
  	# 'resources' gives all seven routes
  	resources :listings
    # get 'listings/new'
    # get 'listings/edit'
    # get 'listings/index'
    # get 'listings/show'
  end
  root to: 'static_pages#home'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

end
