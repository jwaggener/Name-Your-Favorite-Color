// ==========================================================================
// Project:   Crayola
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Crayola */

Crayola = SC.Application.create({
	store: SC.Store.create().from('Crayola.FixturesDataSource')
});

Crayola.statechart = SC.Statechart.create({
	
	autoInitStatechart: NO,
	
	rootState: SC.State.design({
		initialSubstate: 'ready',
		ready: SC.State.plugin('Crayola.ReadyState')
	})
});

Crayola.pane = SC.Pane.create({
	//layout: {centerX: 0, centerY: 0, height: 400, width: 800},
	childViews: ['colors'],
	classNames: ['app'],
	defaultResponder: 'Crayola.statechart',
	colors: SC.TemplateView.design({templateName: 'color'})
});

SC.ready(function() {
  Crayola.statechart.initStatechart();
});