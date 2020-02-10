class AddEmployeeInterest < ActiveRecord::Migration[5.2]
  def change
  	create_table :employee_interest do |t|
  		t.references :employee, index: true, foreign_key: true
  		t.references :interest, index: true, foreign_key: true

  		t.timestamps null: false
  	end
  end
end
