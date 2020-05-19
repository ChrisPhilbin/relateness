require 'open-uri'

class Interest < ApplicationRecord

	has_many :employee_interest
	has_many :employees, :through => :employee_interest

	def update_single__employee_interest(interest)
		#get news items back for one single interest

		url = "http://newsapi.org/v2/everything?"\
      	"q=#{interest}&"\
      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
      	"sortBy=popularity&"\
      	"apiKey=#{ENV[API_KEY]}"

		req = open(url)

		response_body = req.read

		return response_body
	end

	def self.update_all_employee_interests(interests)
		#accepts array of interest objects and returns relevent news for each interest
		# binding.pry

		arr = []

		interests.each do |i|
			arr << i.name
		end

		if arr.empty?
			return {}
		end

		news = []
		arr.each do |i|
			url = "http://newsapi.org/v2/everything?"\
	      	"q=#{i}&"\
	      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
	      	"sortBy=popularity&"\
	      	"pageSize=3&"\
	      	"apiKey=#{ENV['API_KEY']}"

			req = open(url)

			# response_body = req.read
			response_body = JSON.parse(req.read)

			news << response_body

		end

		return news.first
	end

end
