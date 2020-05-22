Rails.application.routes.draw do

  devise_for :users
	namespace :v1, defaults: { format: :json } do
		get 'employees/:id/interests', to: 'interests#employees_interests'
		post 'employees/:id/interests/new', to: 'interests#add_interest_to_employee'
		get 'employees/:id/interests/newsfeed', to: 'interests#newsfeed'
		resources :employees
		resources :interests
	end

	# get '*page', to: 'static#index', constraints: ->(req) do
	# 	!req.xhr? && req.format.html?
	# end

	root 'static#index'

end
