class AddFieldsToEmployees < ActiveRecord::Migration[5.2]
  def change
    add_column :employees, :primaryemail, :text
    add_column :employees, :nickname, :text
    add_column :employees, :homephone, :text
    add_column :employees, :workphone, :text
    add_column :employees, :eenumber, :integer
    add_column :employees, :pets, :text
  end
end
