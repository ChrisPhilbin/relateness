class RenameInterestColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :interests, :interest, :name
  end
end
