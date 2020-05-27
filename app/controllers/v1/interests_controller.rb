require 'pry'
class V1::InterestsController < ApplicationController

	# validates_uniqueness_of :name, :message => "This interest already exists"
	before_action :authenticate_user!

	def index
		if user_signed_in?
			render json: Interest.all
		else
			render json: {}, status: 401
		end
	end

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

	def add_interest_to_employee
		if user_signed_in?
			employee = Employee.find(params[:id])
			new_interests = params[:interests]
			new_interests.each do |i|
				interest = Interest.find_by(name: i)
				if employee.interests.find_by(name: i)
					break
				else
					employee.interests << interest
				end
			end
			render json: employee.interests
		end
	end

	def delete_interest_from_employee
		if user_signed_in?
			employee = Employee.find(params[:employee_id])
			employee.interests.destroy(params[:id])
			render json: employee.interests
		end
	end

	private

	def interest_params
		params.require(:interest).permit(:name)
	end
end
