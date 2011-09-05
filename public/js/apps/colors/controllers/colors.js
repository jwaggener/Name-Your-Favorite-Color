App.Controllers.Colors = Backbone.Router.extend({
    routes: {
        "color/:id":            	"edit",
        "":                         "index",
        "new":                      "newColor"
    },
    
    edit: function(id) {
        var col = new Color({ id: id });
        col.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: col });
            },
            error: function() {
                new Error({ message: 'Could not find that color.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
		console.log("index controller");
        var colors = new App.Collections.Colors();
		colors.fetch({
		    success: function() {
                new App.Views.Index({ collection: colors });
            },
            error: function() {
                new Error({ message: "Error loading colors." });
            }
        });
    },
    
    newColor: function() {
		console.log("newcolor");
        new App.Views.Edit({ model: new Color() });
    }
});