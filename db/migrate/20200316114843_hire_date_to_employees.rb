class HireDateToEmployees < ActiveRecord::Migration[5.2]
  def change
  	add_column :employees, :hiredate, :date
  end
end
