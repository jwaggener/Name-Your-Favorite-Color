App.Views.Canvas = Backbone.View.extend({
	
	id: "canvasContainer",
	
	events:{
		
		"click #canvas": "destroyCanvas"
	},
	
	initialize: function() {
        this.render();
    },

	render: function(){
		if(this.options.color)
		{
			this.color = this.options.color;
			this.width = this.options.width;
			this.height = this.options.height;
			this.destroyCanvas();
			this.createCanvas(); 
			this.paintCanvas();
		}
		
	},
	
	createCanvas: function(){
		$(this.el).html("<canvas id='canvas'/>");
		$("#app").append(this.el);
	},
	
	destroyCanvas: function(){
		$('#canvasContainer').remove();
		$(this.el).html("<div/>");
	},
	
	paintCanvas: function(){
		this.$('#canvas').width = this.width;
		this.$('#canvas').css ("height", this.height );
		var context = this.$('#canvas')[0].getContext("2d");
		context.fillStyle = this.color;
		//context.strokeStyle = "#ff0000";
		
		console.log( "canvas height",this.$('#canvas').css ("height") );
		context.fillRect(0, 0, this.width, this.$('#canvas').height() );
		//context.strokeRect(0,  0, 500, 500);
	}
})