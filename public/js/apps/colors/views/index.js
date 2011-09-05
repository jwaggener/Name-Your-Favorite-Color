App.Views.Index = Backbone.View.extend({
    initialize: function() {
        this.colors = this.options.collection;
        this.render();
    },
    
    render: function() {
		var colorpicker, template, out;
		colorpicker = new App.Views.ColorPicker({ model: new Color() }).el;
		console.log('index.js rendering a colorpicker',colorpicker);
        if(this.colors.length > 0) {
            //out += "<div class='color'><a href='#new'>Name a Color</a><div style='background-alpha:0;' class='color-swatch'></div></div>";
			template = Handlebars.compile( $("#colors-template").html());
			out = template(this.colors);
        } else {
            out = "<h3>No colors! <a href='#new'>Create one</a></h3>";
        }
        $(this.el).html(out);
		console.log( this.$('#colors') );
		this.$('.color:first').before(colorpicker);
		//$(this.el).prepend(colorpicker);
        $('#app').html(this.el);
    }
});