App.Views.ColorPicker = Backbone.View.extend({
	
	id: "colorPickerContainer",
	
	className: 'mycolorpicker',
	
	events: {
        "submit form": "save",
		"click #cancel": "destroyColorPicker"
    },

	initialize: function() {
        //this.colors = this.options.collection;
        this.render();
    },
	
	save: function() {
        var self = this;
        //var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
		console.log( $("#jPicker") )
        console.log( $.jPicker.List[0].color.active.val('hex') );
		console.log( this.$('[name=colorName]').val() );

        this.model.save({ name: this.$('[name=colorName]').val(), color: $.jPicker.List[0].color.active.val('hex') }, {
            success: function(model, resp) {
                //new App.Views.Notice({ message: msg });
                
                self.model = model;
                self.render();
                self.delegateEvents();
				
				window.location = "";
                //Backbone.history.saveLocation('color/' + model.id);
            },
            error: function() {
                console.log("There was an error in saving the color.");
            }
        });
        
        return false;
    },

	render: function() {
		var out
		//out = "<div class='shim'></div>";
		
		//out = "<div class='dialog'>blah blahs";
		out = "<div class='dialog'>"
		out += "<div class='leftCol'>"

		
	
		out += "<div id='jPicker' /></div>"
		out += "<div class='rightCol'><h2>< Choose a Color.</h2><h2>Give it a Name:</h2>"
		out += "<form><p><input type='text' name='colorName' class='input' /></p>"
		out += "<span style='margin-right:8px'><button><h3>Name Your Color</h3></button></span><a id='cancel' class='cancel' >cancel</a></form>"
		out += "</div>"
		out += "<div class='clear'/>"
		out += "</div>"
		
		/*out += "<div class='leftCol'>";
		out+= "test test test tes t"
		//out += "<div id='jPicker' />";
		out += "</div>";
		
		out += "<div class='rightCol'>";
		out += "<a id='cancel'>cancel</a>" //+ "jklasdjfklasjdfkljaskldjfklajsdklfjaskljflasdkj"
		out += "</div>";*/

		$("#colors").css("opacity", .5);
        $(this.el).html(out);
		this.$('#jPicker').jPicker();
		$("#app").append(this.el);
		
		//('#jPicker').jPicker.List[index]
    },
	
	destroyColorPicker: function(){
		$("#colors").css("opacity", 1);
		$('#colorPickerContainer').remove();
		$(this.el).html("<div/>");
	}
})