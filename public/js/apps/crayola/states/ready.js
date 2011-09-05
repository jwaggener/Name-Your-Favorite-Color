Crayola.ReadyState = SC.State.extend({
	
	initialSubstate: 'loading',
	
	enterState: function() {
	    Crayola.pane.append();
	},
	
	exitState: function() {
		Crayola.pane.remove();
	},
	
	loading: SC.State.design({
		_loaded: 0,
	    _total: 0,
	
		enterState: function() {
			this._loaded = 0;
			this._total = 1;
			this._loadColors();
		},

		exitState: function() {
		},
		
		dataLoaded: function() {
			this._loaded++;
			if (this._loaded === this._total) {
				this.get('statechart').sendAction('gotoNone');
			}
		},
		
		_loadColors: function() {
			var query = SC.Query.local(Crayola.Color),
				data = Crayola.store.find(query);
			
			data.addObserver('status', this, function observer() {
				if (data.get('status') === SC.Record.READY_CLEAN) {
					data.removeObserver('status', this, observer);
					console.log("data length",data.get("length"));
					Crayola.colorsController.set('content', data);
					this.get('statechart').invokeStateMethod('dataLoaded');
				}
				// might want to check error states too
			});
			
			// in case our data was already loaded (ie synchronous)
			data.notifyPropertyChange('status');
		}
	}),
	
	none: SC.State.design({
		initialSubstate: 'none',
		enterState: function() {
			console.log("Application ready");
			console.log("Crayola.colorsController.content.length",Crayola.colorsController.content.get("length"));
		},
		none: SC.State
	}),
	
	gotoNone: function() {
		this.gotoState('ready.none');
	    return YES;
	  }
});