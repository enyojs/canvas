enyo.kind({
	name:"enyo.canvas.Shape",
	kind:enyo.canvas.Control,
	published: {
		color: "red",
		outlineColor: "",
		bounds: ""
	},
	fill: function(inContext) {
		inContext.fill();
	},
	outline: function(inContext) {
		inContext.stroke();
	},
	draw: function(inContext) {
		if (this.color) {
			inContext.fillStyle = this.color;
			this.fill(inContext);
		}
		if (this.outlineColor) {
			inContext.strokeStyle = this.outlineColor;
			this.outline(inContext);
		}
	}
});
