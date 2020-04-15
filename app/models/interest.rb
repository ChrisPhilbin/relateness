require 'open-uri'

class Interest < ApplicationRecord

	has_many :employee_interest
	has_many :employees, :through => :employee_interest

	def get_news(interest)

		url = "http://newsapi.org/v2/everything?"\
      	"q=#{interest}&"\
      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
      	"sortBy=popularity&"\
      	"apiKey=1da9ec228ba04ed1b0db42d2e298d15c"

		req = open(url)

		response_body = req.read

		return response_body
	end

	def get_all_news(interests)
		arr = []

		binding.pry

		interests.each do |i|
			arr << i.interest
		end

		news = []
		arr.each do |i|
			url = "http://newsapi.org/v2/everything?"\
	      	"q=#{interest}&"\
	      	"from=#{Time.now.strftime("%Y-%m-%d")}&"\
	      	"sortBy=popularity&"\
	      	"apiKey=1da9ec228ba04ed1b0db42d2e298d15c"

			req = open(url)

			response_body = req.read

			news << response_body
		end

		return news
	end

end
