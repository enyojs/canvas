enyo.kind({
	name: "enyo.canvas.Text",
	kind: enyo.canvas.Shape,
	published: {
		text: "",
		font: "12pt Arial",
		align: "left"
	},
	renderSelf: function(ctx) {
		ctx.textAlign = this.align;
		ctx.font = this.font;
		this.draw(ctx);
	},
	fill: function(ctx) {
		ctx.fillText(this.text, 0, 0);
	},
	outline: function(ctx) {
		ctx.strokeText(this.text, 0, 0);
	}
});
