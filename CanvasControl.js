enyo.kind({
	name: "enyo.canvas.Control",
	kind: enyo.UiComponent,
	published: {
		color: "red",
		//* fill or stroke
		style: "fill",
		bounds: ""
	},
	constructor: function() {
		this.bounds = {l: enyo.irand(400), t: enyo.irand(400), w: enyo.irand(100), h: enyo.irand(100)};
		this.inherited(arguments);
	},
	importProps: function(inProps) {
		if (inProps.bounds) {
			enyo.mixin(this.bound, inProps.bounds);
			delete inProps.bounds;
		}
	},
	renderSelf: function(inContext) {
	},
	render: function(inContext) {
		if (this.children.length) {
			this.renderChildren(inContext);
		} else {
			this.renderSelf(inContext);
		}
	},
	renderChildren: function(inContext) {
		for (var i=0, c; c=this.children[i]; i++) {
			c.render(inContext);
		}
	}
});
