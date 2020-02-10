class Interest < ApplicationRecord

	has_many :employees, through: :employee_interests

end
