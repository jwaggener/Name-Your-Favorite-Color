App.Views.ColorPicker = Backbone.View.extend({
	
	className: 'color-picker',
	
	events: {
        "submit form": "save"
    },

	initialize: function() {
        //this.colors = this.options.collection;
        this.render();
    },
	
	save: function() {
		
		console.log("save colorpicker");
		console.log("this.model",this.model);
		console.log("this.$('[name=name]').val()",this.$('[name=name]').val());
		console.log("this.$('[name=color]').val()",this.$('[name=color]').val());
        var self = this;
        //var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
        
        this.model.save({ name: this.$('[name=name]').val(), color: this.$('[name=color]').val() }, {
            success: function(model, resp) {
                //new App.Views.Notice({ message: msg });
                
                self.model = model;
                self.render();
                self.delegateEvents();
				
				window.location = "";
                //Backbone.history.saveLocation('color/' + model.id);
            },
            error: function() {
                new App.Views.Error();
            }
        });
        
        return false;
    },

	render: function() {
        var out = "<form><input id='NameColor' name='name' type='text' value='Name a Color'/><button>Submit</button><input id='Binded' name='color' class='color-swatch' style='height:93px' type='text' value='e2ddcf' /></form>"
        $(this.el).html(out);
		this.$('#Binded').jPicker({
				window:{
					
					effects:
					    {
					      type: 'slide', // effect used to show/hide an expandable picker. Acceptable values "slide", "show", "fade"
					      speed:
					      {
					        show: 10, // duration of "show" effect. Acceptable values are "fast", "slow", or time in ms
					        hide: 20 // duration of "hide" effect. Acceptable value are "fast", "slow", or time in ms
					      }
					    },
					    position:
					    {
					      x: 10, // acceptable values "left", "center", "right", "screenCenter", or relative px value
					      y: 10, // acceptable values "top", "bottom", "center", or relative px value
					    }
				}
			
		});
    }
})