enyo.kind({
	name: "enyo.Canvas",
	kind: enyo.Control,
	tag: "canvas",
	attributes: {
		width: 500,
		height: 500
	},
	create: function() {
		this.inherited(arguments);
	},
	generateInnerHtml: function() {
		return '';
	},
	teardownChildren: function() {
	},
	rendered: function() {
		//this.inherited(arguments);
		this.renderChildren();
	},
	renderChildren: function() {
		var canvas = this.hasNode();
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
		}
		if (ctx) {
			for (var i=0, c; c=this.children[i]; i++) {
				c.render(ctx);
			}
		}
	}
});