class Employee < ApplicationRecord
  belongs_to :user
  validates :full_name, presence: true
end
