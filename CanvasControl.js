enyo.kind({
	name: "enyo.canvas.Control",
	kind: enyo.UiComponent,
	defaultKind:"enyo.canvas.Control",
	events: {
		onRender: ""
	},
	constructor: function() {
		this.bounds = {l: enyo.irand(400), t: enyo.irand(400), w: enyo.irand(100), h: enyo.irand(100)};
        //* the angle the context to be rotated
        this.rotate = 0;
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
	},
    /**
        before drawing the context will be moved to the point where the shape to be drawed,
        then rotate
     */
    beforeDraw: function(inContext) {
        inContext.save();
        // move to the start point of drawing
        if (this.bounds.l !== undefined && this.bounds.t !== undefined)
            inContext.translate(this.bounds.l, this.bounds.t);
        // rotate the inContext
        inContext.rotate(this.rotate);
    },
    /**
        after drawing, the context will be restored to previous status
     */
    afterDraw: function(inContext) {
        inContext.restore();
    }
});
