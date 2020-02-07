class V1::EmployeesController < ApplicationController

	def index
		if user_signed_in?
			render json: current_user.employees
		else
			render json: {}, status: 401
		end
	end

	def create
		if user_signed_in?
			if employee = current_user.employees.create(employee_params)
				render json: employee, status: :created
			else
				render json: employee.errors, status: 400
			end
		else
			render json: {}, status: 401
		end	
	end

	private

	def employee_params
		params.require(:employee).permit(:fullname)
	end
	
end
