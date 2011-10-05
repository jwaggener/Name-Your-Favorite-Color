App.Views.Index = Backbone.View.extend({
	
	events:{
		"click .color":"handle_click",
		"mouseover .color":"handle_mouseover",
		"mouseout .color":"handle_mouseout",
		"click #chooseColor":"handle_chooseColor"	
	},
	
    initialize: function() {
        this.colors = this.options.collection;
        this.render();
    },
    
    render: function() {
		var chooseColor, colorpicker, template, out;
		chooseColor = '<div id="chooseColor" class="color choose-color" ><div class="color-name"><span>Name<br/>Your<br/>Favorite<br/>Color</span></div></div>';
		//colorpicker = new App.Views.ColorPicker({ model: new Color() }).el;
        if(this.colors.length > 0) {
			template = Handlebars.compile( $("#colors-template").html());
			out = template(this.colors);
        } else {
            out = "<h3>No colors! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
		this.$('.color:first').before(chooseColor);
        $('#app').html(this.el);
    },
	
	handle_mouseover: function( target ){
		
		console.log("mouseover");
		//console.log( $(target.currentTarget).find("span").css("color", "#ff0") );//use the compliment instead
		//$(target.currentTarget).css("width", "250px");
	},
	
	handle_mouseout: function( target ){
		
		console.log("mouseout");
		//$(target.currentTarget).css("color", "");
	},
	
	handle_click: function( target ){
		if ( $(target.currentTarget).attr("id") == "chooseColor" ) return;
		var color, name
		color = $(target.currentTarget).css("background-color");
		name = $(target.currentTarget).find('span').html();
		console.log( "name",name)
		new App.Views.Canvas({ color: color, name: name });
	},
	
	handle_chooseColor:function(){
		new App.Views.ColorPicker({ model: new Color() }).el;
	}
});