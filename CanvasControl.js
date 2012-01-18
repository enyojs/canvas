enyo.kind({
	name: "enyo.canvas.Control",
	kind: enyo.UiComponent,
	defaultKind:"enyo.canvas.Control",
	events: {
		onRender: ""
	},
	constructor: function() {
		this.bounds = {l: enyo.irand(400), t: enyo.irand(400), w: enyo.irand(100), h: enyo.irand(100)};
		this.inherited(arguments);
	},
	importProps: function(inProps) {
		this.inherited(arguments);
		if (inProps.bounds) {
			enyo.mixin(this.bounds, inProps.bounds);
			delete inProps.bounds;
		}
	},
	renderSelf: function(inContext) {
		this.doRender(inContext);
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
