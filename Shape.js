enyo.kind({
	name:"enyo.canvas.Shape",
	kind:enyo.canvas.Control,
	published: {
		color: "red",
		outlineColor: "",
		bounds: "",
        //* the angle the context to be rotated
        rotate: ""
    },
	fill: function(inContext) {
		inContext.fill();
	},
	outline: function(inContext) {
		inContext.stroke();
	},
	draw: function(inContext) {
        this.beforeDraw(inContext);
		if (this.color) {
			this.fill(inContext);
		}
		if (this.outlineColor) {
			this.outline(inContext);
		}
        this.afterDraw(inContext);
	}
    
});
