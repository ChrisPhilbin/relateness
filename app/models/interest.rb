require 'open-uri'

class Interest < ApplicationRecord

	has_many :employee_interest
	has_many :employees, :through => :employee_interest

	def get_interests(interest)

		url = "http://newsapi.org/v2/everything?"\
      	"q=#{interest}&"\
      	"from=2020-04-13&"\
      	"sortBy=popularity&"\
      	"apiKey=1da9ec228ba04ed1b0db42d2e298d15c"

		req = open(url)

		response_body = req.read

		puts response_body
	end

end
