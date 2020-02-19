Rails.application.routes.draw do

  # resources :interests
  # resources :employees
  devise_for :users
	namespace :v1, defaults: { format: 'json' } do
		get 'employees/:id/interests', to: 'interests#employees_interests'
		get 'things', to: 'things#index'
		resources :employees
		resources :interests
	end

	get '*page', to: 'static#index', constraints: ->(req) do
		!req.xhr? && req.format.html?
	end

	root 'static#index'

end
