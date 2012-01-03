class UserController < ApplicationController
  
  def create
    User.create! :fb_id => params[:fb_id]
  end
  
  def update
    
  end
  
  def destroy
    
  end
  
end