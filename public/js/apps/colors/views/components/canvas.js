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
		
		console.log( $(window).width() );
		console.log( $(window).height() );
		
		//this.$('#canvas').width = $(window).width();
		//this.$('#canvas').css ("height", $(window).height() );
		this.$('#canvas').css ("margin-top", $(window).scrollTop() - $("#header").height() );
		var context = this.$('#canvas')[0].getContext("2d");
		context.fillStyle = this.color;
		
		context.fillRect(0, 0, $(window).width(), $(window).height() );
		
		context.fillStyle    = '#fff';
		context.font         = '30pt ChunkFiveRoman';
		context.textAlign 	= 'center';
		context.textBaseline = 'middle';
		context.fillText  ( this.name, $(window).width()/2, $(window).height()/2 );
		//context.font         = 'bold 30px sans-serif';
		//context.strokeText('Hello world!', 0, 50);
	}
})