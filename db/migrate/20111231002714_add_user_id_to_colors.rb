class AddUserIdToColors < ActiveRecord::Migration
  def self.up
    add_column :colors, :user_id, :integer
  end

  def self.down
    remove_column :colors, :user_id
  end
end
