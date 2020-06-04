class Employee < ApplicationRecord
  belongs_to :user
  has_many :employee_interest
  has_many :interests, :through => :employee_interest
  validates :fullname, presence: true

  def self.todays_birthdays
    #return array of employee objects whos birthday it is today based on MM/DD
    Employee.where("strftime('%m%d', date) = ?", Date.today.strftime('%m%d'))
  end

  def self.upcoming_birthdays
    #return array of employee objects who have an upcoming birthday within the next 14 days
    Employee.where(date: 0.days.ago .. 14.days.from_now)
  end

end
