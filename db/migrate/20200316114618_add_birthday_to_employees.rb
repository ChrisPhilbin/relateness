class AddBirthdayToEmployees < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :date, :date
  end
end
