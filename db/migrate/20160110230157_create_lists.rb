class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :email

      t.timestamps null: false
    end
  end
end
