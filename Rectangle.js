enyo.kind({
	name: "enyo.canvas.Rectangle",
	kind: enyo.canvas.Shape,
	published: {
		clear: false
	},
	renderSelf: function(ctx) {
		if (this.clear) {
			ctx.clearRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
		} else {
			this.draw(ctx);
		}
	},
	fill: function(ctx) {
		ctx.fillRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
	},
	outline: function(ctx) {
		ctx.strokeRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
	}
});
