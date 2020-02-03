user = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')

employees = [

	{
		fullname: 'Mike Smith'
	},
	[
		fullname: 'Sarah Freeman'
	],
	{
		fullname: 'Sam Simon'
	},
	{
		fullname: 'Keith Page'
	}
]

employees.each do |employee|
	user.employees.create(employee)
end