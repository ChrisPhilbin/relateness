class V1::EmployeesInterests < ApplicationController

	def index
		if user_signed_in?
			employee = Employee.find(params[:id])
			interests = employee.interests
			render json: interests
		else
			render json: {}, status: 401
		end
	end



end