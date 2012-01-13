enyo.kind({
	name: "enyo.Canvas",
	kind: enyo.Control,
	tag: "canvas",
	attributes: {
		width: 500,
		height: 500
	},
	defaultKind: "enyo.canvas.Control",
	generateInnerHtml: function() {
		return '';
	},
	teardownChildren: function() {
	},
	rendered: function() {
		this.renderChildren();
	},
	renderChildren: function(inContext) {
		var ctx = inContext;
		var canvas = this.hasNode();
		if (!ctx) {
			if (canvas.getContext) {
				ctx = canvas.getContext('2d');
			}
		}
		if (ctx) {
			for (var i=0, c; c=this.children[i]; i++) {
				c.render(ctx);
			}
		}
	},
	update: function() {
		var canvas = this.hasNode();
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			var b = this.getBounds();
			// clear canvas
			ctx.clearRect(0, 0, b.width, b.height);
			this.renderChildren(ctx);
		}
	}
});
