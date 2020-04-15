require 'open-uri'
require 'pry'

class Interest < ApplicationRecord

	has_many :employee_interest
	has_many :employees, :through => :employee_interest

	def update_single__employee_interest(interest)
		#get news items back for one single interest

		url = "http://newsapi.org/v2/everything?"\
      	"q=#{interest}&"\
      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
      	"sortBy=popularity&"\
      	"apiKey=1da9ec228ba04ed1b0db42d2e298d15c"

		req = open(url)

		response_body = req.read

		return response_body
	end

	def self.update_all_employee_interests(interests)
		#accepts array of interest objects and returns relevent news for each interest

		arr = []

		interests.each do |i|
			arr << i.interest
		end

		news = []
		arr.each do |i|
			url = "http://newsapi.org/v2/everything?"\
	      	"q=#{i}&"\
	      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
	      	"sortBy=popularity&"\
	      	"pageSize=3&"\
	      	"apiKey=1da9ec228ba04ed1b0db42d2e298d15c"

			req = open(url)

			response_body = req.read

			news << response_body
		end

		return news
	end

end
