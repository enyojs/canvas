enyo.kind({
	name: "enyo.canvas.Text",
	kind: enyo.canvas.Control,
	published: {
		text: "",
		font: "12pt Arial"
	},
	renderSelf: function(ctx) {
		ctx.fillStyle = this.color;
		ctx.font = this.font;
		ctx.fillText(this.text, this.bounds.l, this.bounds.t);
	}
});
