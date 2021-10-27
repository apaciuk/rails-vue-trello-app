Rails.application.routes.draw do
  resources :cards
  resources :lists
  root to: 'lists#index'
  get 'dashboard/index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
