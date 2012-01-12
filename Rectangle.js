enyo.kind({
	name: "enyo.canvas.Rectangle",
	kind: enyo.canvas.Control,
	published: {
		//* fill, stroke, or clear
		style: "fill"
	},
	renderSelf: function(ctx) {
		if (this.style != "clear") {
			ctx[this.style + "Style"] = this.color;
		}
		ctx[this.style + "Rect"](this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
	}
});
