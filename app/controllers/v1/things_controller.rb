class V1::ThingsController < ApplicationController

	def index
		render json: { :things => [
			{
				:name => 'something',
				:guid => 'kljlj9u0-oihn7-sadsa-asdd'
			}
		] }.to_json
	end
end