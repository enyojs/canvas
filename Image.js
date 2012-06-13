enyo.kind({
	name: "enyo.canvas.Image",
	kind: enyo.canvas.Control,
	published: {
		src: ""
	},
	create: function() {
		this.image = new Image();
		this.inherited(arguments);
		this.srcChanged();
	},
	srcChanged: function() {
		if (this.src) {
			/*
			this.image.onload = enyo.bind(this, function() {
				console.log('image loaded');
				this.container.update();
			});
			*/
			this.image.src = this.src;
		}
	},
	renderSelf: function(ctx) {
		//console.log('image rendered');
        this.beforeDraw(ctx);
		ctx.drawImage(this.image, 0, 0);
		//ctx.drawImage(this.image, 0, 0);
        this.afterDraw(ctx);
	}
});
