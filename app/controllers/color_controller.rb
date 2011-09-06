class ColorController < ApplicationController
             
  def index
    if ( params.has_key?(:index) && params.has_key?(:length) )
      @colors = Color.limit(params[:length]).offset(params[:index])
    else
      @colors = Color.all
    end
    @format = :json;
    if ( params[:format] == 'xml' ) 
        @format = :xml
    end
    render @format => @colors, :callback => params[:callback], :only => [ :id, :name, :color, :created_at ]
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
    color = Color.create! :name => params[:name], :color=>params[:color] 
    render :json => color
  end
  
  def update
    color = Color.find(params[:id])
    color.update_attributes! :name => params[:name], :color=>params[:color]
    render :json => color
  end
    
end