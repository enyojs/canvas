enyo.kind({
	name: "enyo.canvas.Circle",
	kind: enyo.canvas.Shape,
	renderSelf: function(ctx) {
		ctx.beginPath();
		ctx.arc(this.bounds.l, this.bounds.t, this.bounds.w, 0, Math.PI*2);
		this.draw(ctx);
	}
});
