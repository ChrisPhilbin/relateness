class Employee < ApplicationRecord
  belongs_to :user
  validates :fullname, presence: true
end
