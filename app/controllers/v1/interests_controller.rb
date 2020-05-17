require 'pry'
class V1::InterestsController < ApplicationController

	def index
		if user_signed_in?
			render json: Interest.all
		else
			render json: {}, status: 401
		end
	end

	# def show
	# 	if user_signed_in?
	# 		interest = Interest.find(params[:id])
	# 		render json: interest. status: :created
	# 	else
	# 		render json: interest.errors, status: 400
	# 	end
	# end

	def destroy
		if user_signed_in?
			Interest.find(params[:id]).destroy
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

	def newsfeed
		if user_signed_in?
			employee = Employee.find(params[:id])
			interests = employee.interests
			news = Interest.update_all_employee_interests(interests)
			render json: news
		end
	end

	private

	def interest_params
		params.require(:interest).permit(:name)
	end
end
