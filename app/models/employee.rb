class Employee < ApplicationRecord
  belongs_to :user
  has_many :interests, through: :employee_interests
  validates :fullname, presence: true
end
