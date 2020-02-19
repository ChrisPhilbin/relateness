Rails.application.routes.draw do

  # resources :interests
  # resources :employees
  devise_for :users
	namespace :v1, defaults: { format: 'json' } do
		get 'things', to: 'things#index'
		resources :employees
		resources :interests, only: [:index, :create] do
			resources :employees_interests, only: [:index]
		end
	end

	get '*page', to: 'static#index', constraints: ->(req) do
		!req.xhr? && req.format.html?
	end

	root 'static#index'

end
