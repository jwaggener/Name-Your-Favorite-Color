var App = {
    Views: {},
    Controllers: {},
	Collections: {},
    init: function() {
        new App.Controllers.Colors();
        Backbone.history.start();
    }
};