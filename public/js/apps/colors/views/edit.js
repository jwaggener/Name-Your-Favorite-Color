App.Views.Edit = Backbone.View.extend({
    events: {
        "submit form": "save"
    },
    
    initialize: function() {
		console.log("model",this.model);
        this.render();
    },
    
    save: function() {
        var self = this;
        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
        
        this.model.save({ name: this.$('[name=name]').val(), color: this.$('[name=color]').val() }, {
            success: function(model, resp) {
                new App.Views.Notice({ message: msg });
                
                self.model = model;
                self.render();
                self.delegateEvents();

                Backbone.history.saveLocation('color/' + model.id);
            },
            error: function() {
                new App.Views.Error();
            }
        });
        
        return false;
    },
    
    render: function() {
	
		var template = Handlebars.compile( $("#colors-edit").html() );
		var out = template( { buttonLabel:this.model.isNew() ? 'Create' : 'Save'} );
		
        $(this.el).html(out);
        $('#app').html(this.el);

        var val = ( this.model.get('color') != undefined ) ? this.model.get('color').name :  "Name a color";
        this.$('[name=name]').val(val); // use val, for security reasons
		var c = ( this.model.get('color') != undefined ) ? this.model.get('color').color : 'enter a color';
		this.$('[name=color]').val(c);
    }
});