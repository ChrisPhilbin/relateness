class V1::InterestsController < ApplicationController

	def index
		if user_signed_in?
			render json: Interest.all
		else
			render json: {}, status: 401
		end
	end
end
