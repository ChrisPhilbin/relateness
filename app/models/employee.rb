class Employee < ApplicationRecord
  belongs_to :user
  has_many :employee_interest
  has_many :interests, :through => :employee_interest
  validates :fullname, presence: true
end
