class ColorController < ApplicationController
             
  def index
    @length = 100
    @index = Color.count - @length
    if ( params.has_key?(:index) )
      @index = params[ :index ]
    end
    if( params.has_key?(:length) )
      @length = params[ :length ]
    end
    @colors = Color.limit( @length ).offset( @index )
    @format = :json;
    if ( params[:format] == 'xml' ) 
        @format = :xml
    end
    render @format => @colors, :callback => params[:callback], :only => [ :id, :name, :color, :created_at, :user_id ]
  end
  
  def show
    @color = Color.find(params[:id])
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @color }
      format.js  {render :json => @color}
    end
  end
  
  def create
    if params[:fb_id]
      user = User.find_by_fb_id(params[:fb_id])
      logger.info( "hello world  #{user.to_s} " )
      if( !user )
        logger.info( "creating a new user" )
        #create a new user and set the id
        user = User.create! :fb_id => params[:fb_id]
      end
      user_id = user.id
      logger.info( "user id #{user_id}" )
    end
    color = Color.create! :name => params[:name], :color=>params[:color], :user_id=>user_id 
    render :json => color
  end
  
  def update
    color = Color.find(params[:id])
    color.update_attributes! :name => params[:name], :color=>params[:color]
    render :json => color
  end
    
end