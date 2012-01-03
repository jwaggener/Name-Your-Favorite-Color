require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "users" do
    
    assert users(:one) != nil
    assert users(:two) != nil
    users(:three).fb_id = "wawawa"
    @auser = User.where( :fb_id => "fb_id_value01" ).first
    #puts @auser.fb_id
    assert @auser != nil
    assert users(:three).fb_id != nil
    @new_user = User.create! :fb_id => 'canola'
  end
  # users(:one) == 
end
