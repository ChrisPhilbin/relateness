class Employee < ApplicationRecord
  belongs_to :user
  has_many :employee_interest
  has_many :interests, :through => :employee_interest
  validates :fullname, presence: true

  def self.birthday
    Employee.where(date: Date.today).all_day
  end

  def self.upcoming_birthdays
    Employee.where(date: Date.today.month).all_day
  end

end
