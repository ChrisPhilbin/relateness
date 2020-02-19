class V1::InterestsController < ApplicationController

	def index
		if user_signed_in?
			render json: Interest.all
		else
			render json: {}, status: 401
		end
	end

	def employees_interests
		if user_signed_in?
			employee = Employee.find(params[:id])
			interests = employee.interests
			render json: interests
		else
			render json: {}, status: 401
		end
	end

	def create
		if user_signed_in?
			if interest = Interest.create(interest_params)
				render json: interest, status: :created
			else
				render json: interest.errors, status: 400
			end
		else
			render json: {}, status: 401
		end	
	end

	private

	def interest_params
		params.require(:interest).permit(:interest)
	end
end
