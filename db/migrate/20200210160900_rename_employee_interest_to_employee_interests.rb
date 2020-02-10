class RenameEmployeeInterestToEmployeeInterests < ActiveRecord::Migration[5.2]
  def change
  	rename_table :employee_interest, :employee_interests
  end
end
