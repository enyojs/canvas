enyo.kind({
	name: "enyo.canvas.Circle",
	kind: enyo.canvas.Control,
	renderSelf: function(ctx) {
		ctx.beginPath();
		ctx.arc(this.bounds.l, this.bounds.t, this.bounds.w, 0, Math.PI*2);
		ctx[this.style + "Style"] = this.color;
		ctx[this.style]();
	}
});
