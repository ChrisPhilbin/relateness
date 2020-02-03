class V1::EmployeesController < ApplicationController

	def index
		if user_signed_in?
			render json: current_user.employees
		else
			render json: {}, status: 401
		end
	end
	
end
