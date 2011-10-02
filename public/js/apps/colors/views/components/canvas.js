App.Views.Canvas = Backbone.View.extend({
	
	id: "canvasContainer",
	
	events:{
		
		"click #canvas": "destroyCanvas"
	},
	
	initialize: function() {
        this.render();
    },

	render: function(){
		this.name = this.options.name;
		if(this.options.color)
		{
			this.color = this.options.color;
			this.destroyCanvas();
			this.createCanvas(); 
			this.paintCanvas();
		}
		
	},
	
	createCanvas: function(){
		$(this.el).html("<canvas id='canvas' width='" + $(window).width() + "' height='" + $(window).height() + "' />");
		$("#app").append(this.el);
	},
	
	destroyCanvas: function(){
		$('#canvasContainer').remove();
		$(this.el).html("<div/>");
	},
	
	paintCanvas: function(){
		
		this.$('#canvas').css ("margin-top", $(window).scrollTop() - $("#header").height() );
		var context = this.$('#canvas')[0].getContext("2d");
		context.fillStyle = this.color;
		
		context.fillRect(0, 0, $(window).width(), $(window).height() );
		
		console.log( "colorValue( this.color)", colorValue( this.color) );
		
		context.fillStyle  = ( colorValue( this.color) > 200 ) ? '#333' : '#fff';
		context.font         = '40pt ChunkFiveRoman';
		context.textAlign 	= 'center';
		context.textBaseline = 'middle';
		context.fillText  ( this.name, $(window).width()/2, $(window).height()/2 );
		//context.font         = 'bold 30px sans-serif';
		//context.strokeText('Hello world!', 0, 50);
	}
})