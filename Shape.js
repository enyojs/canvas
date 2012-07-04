/**
	Base kind for shapes that can be drawn into the canvas.
	This doesn't have a default rendering, but an event handler
	can call the _draw_ method on it.

	Code that derives from this should provide a _renderSelf_
	implementation.  If more complex operations need to be
	done for filled/outline mode, the _fill_ and _outline_
	methods should also be overridden.
*/
enyo.kind({
	name: "enyo.canvas.Shape",
	kind: enyo.canvas.Control,
	published: {
		//* Color used to draw the interior of the shape.
		color: "red",
		//* Color used for outline of shape.
		outlineColor: ""
	},
	//* @protected
	fill: function(inContext) {
		inContext.fill();
	},
	outline: function(inContext) {
		inContext.stroke();
	},
	//* @public
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
