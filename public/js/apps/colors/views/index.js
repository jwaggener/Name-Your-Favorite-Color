App.Views.Index = Backbone.View.extend({
	
	events:{
		"click .color":"handle_click",
		"mouseover .color":"handle_mouseover",
		"mouseout .color":"handle_mouseout",
		"mouseover #chooseColor":"handle_mouseoverChoose",
		"mouseout #chooseColor":"handle_mouseoutChoose",
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
		
		//var c = compliment( $(target.currentTarget).css("background-color") )
		//$(target.currentTarget).find("span").css("color", "#" + c );//use the compliment instead
		$(target.currentTarget).find("span").css("text-decoration", "underline" );
	},
	
	handle_mouseout: function( target ){
		
		//var c = ( colorValue( $(target.currentTarget).css("background-color") ) > 220 ) ? "#999" : "#fff";
		//$(target.currentTarget).find("span").css("color", c );
		$(target.currentTarget).find("span").css("text-decoration", "none" );
	},
	
	handle_mouseoverChoose: function(){
		console.log("choose color rollover")
		this.$('#chooseColor').css('color', '#0084ff');// 'js/apps/colors/resources/css/stripes.png');
	},
	
	handle_mouseoutChoose: function(){
		console.log("choose color rollout");
		this.$('#chooseColor').css('color', '#fff');
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