/**
	_enyo.canvas.Shape_ is the base kind for shapes that can be drawn into the
	canvas.	It doesn't have a default rendering, but an event handler may call its
	_draw()_ method.

	Kinds derived from this one should provide their own implementation of
	_renderSelf()_. If more complex operations are needed for filled mode or
	outline	mode, override the _fill()_ method or the _outline()_ method,
	respectively.
*/
enyo.kind({
	name: "enyo.canvas.Shape",
	kind: enyo.canvas.Control,
	published: {
		//* Color used to draw the interior of the shape
		color: "red",
		//* Color used to draw the outline of the shape
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
	/**
		Draws the shape by invoking its _fill()_ or _outline()_ method. Usually
		invoked by the derived shape's _renderSelf()_ method in response to the
		rendering of the canvas control's parent.
	*/
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
