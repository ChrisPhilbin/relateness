class Interest < ApplicationRecord

	has_many :employee_interest
	has_many :employees, :through => :employee_interest

end
