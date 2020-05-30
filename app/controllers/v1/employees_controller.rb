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

	def destroy
		if user_signed_in?
			Employee.find(params[:id]).destroy
		end
	end

	def show
		render json: Employee.find(params[:id])
	end

	def update
		employee = Employee.find(params[:id])
		employee.update_attributes(employee_params)
		render json: employee
	end

	private

	def employee_params
		params.require(:employee).permit(:fullname, :id, :user_id, :updated_at, :created_at, :date, :hiredate)
	end
	
end
