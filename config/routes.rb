Rails.application.routes.draw do

  devise_for :users
	namespace :v1, defaults: { format: :json } do
		get 'employees/:id/interests', to: 'interests#employees_interests'
		post 'employees/:id/interests/new', to: 'interests#add_interest_to_employee'
		delete 'employees/:employee_id/interests/:id', to: 'interests#delete_interest_from_employee'
		get 'employees/:id/interests/newsfeed', to: 'interests#newsfeed'
		# get 'employees/todays_birthdays', to: 'employees#todays_birthdays'
		# get 'employees/upcoming_birthdays', to: 'employees#upcoming_birthdays'
		get 'employees/birthdays', to: 'employees#birthdays'
		resources :employees
		resources :interests
	end

	root 'static#index'

end
