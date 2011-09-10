App.Views.Index = Backbone.View.extend({
	
	events:{
		"click .color-swatch":"handle_click"	
	},
	
    initialize: function() {
        this.colors = this.options.collection;
        this.render();
    },
    
    render: function() {
		var colorpicker, template, out;
		colorpicker = new App.Views.ColorPicker({ model: new Color() }).el;
        if(this.colors.length > 0) {
			template = Handlebars.compile( $("#colors-template").html());
			out = template(this.colors);
        } else {
            out = "<h3>No colors! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
		this.$('.color:first').before(colorpicker);
        $('#app').html(this.el);
    },
	
	handle_click: function( target ){
		var color, width, height;
		width = $("#colors").width();
		var itemsPerRow = Math.floor( width/$(".color").width() ) ;
		var numRows = Math.ceil( $("#colors").children().length/itemsPerRow );
		height = numRows * $(".color").outerHeight( true );
		color = $(target.currentTarget).css("background-color");
		new App.Views.Canvas({ color: color, width: width, height: height });
	}
});