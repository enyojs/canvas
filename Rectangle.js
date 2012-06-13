enyo.kind({
	name: "enyo.canvas.Rectangle",
	kind: enyo.canvas.Shape,
	published: {
		clear: false
	},
	renderSelf: function(ctx) {
		if (this.clear) {
            this.beforeDraw(ctx);
            /** since in beforeDraw we moved the context to this point, we
                we should set the begin point to 0,0
            */ 
			ctx.clearRect(0, 0, this.bounds.w, this.bounds.h);
            this.afterDraw(ctx);
		} else {
			this.draw(ctx);
		}
	},
	fill: function(ctx) {
		ctx.fillRect(0, 0, this.bounds.w, this.bounds.h);
	},
	outline: function(ctx) {
		ctx.strokeRect(0, 0, this.bounds.w, this.bounds.h);
	}
});
