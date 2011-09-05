Crayola.ColorsCollectionView = SC.TemplateCollectionView.extend({
  itemView: SC.TemplateView.extend({
	classNames: ['color'],
	mouseEntered: function(evt) {
		document.bgColor=this.content.get('color') ;
    },
	mouseExited: function(evt) {
		document.bgColor="ffffff" ;
    },
    mouseDown: function(evt) {
      window.alert('You clicked on ' + this.content.get('name') + " " + this.content.get('color'));
    }
	})
  
});