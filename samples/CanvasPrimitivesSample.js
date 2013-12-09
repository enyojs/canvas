enyo.kind({
	name: "enyo.sample.CanvasPrimitivesSample",
	classes: "enyo-unselectable onyx",
	components: [
		{kind: "enyo.Canvas", components: [
			{kind: "enyo.canvas.Circle", bounds:{t:60, l:60, w:30}, color:"lightcoral", outlineColor:"red"},
			{kind: "enyo.canvas.Rectangle", bounds:{t:110, l:30, w:100, h:50}, color:"lightblue", outlineColor:"blue"},
			{kind: "enyo.canvas.Text", bounds:{t:200, l:30, h:40, w:200}, color:"green", text:"enyo.js", font:"20pt Cooper Black"},
			{kind: "enyo.canvas.Image", bounds:{t:230, l:30, h:32, w:32}, src:"assets/astrologer.png"},
			{kind: "enyo.sample.BlinkyTriangle", bounds:{t:290, l:30, w:60, h:60}, color:"gold", outlineColor:"orange"},
			{kind: "enyo.canvas.Line", bounds: {start_x: 30, start_y: 450, finish_x: 175 , finish_y: 450, width: 5, Style: "black", cap: "round"}},
			{kind: "enyo.canvas.Line", bounds: {start_x: 175, start_y: 450, finish_x: 450 , finish_y: 550, width: 5, Style: "red", cap: "miter"}}
		]}
	],
	create: function() {
		this.inherited(arguments);
		// Code to monitor image and redraw once loaded
		var img = new Image();
		img.src = this.$.image.src;
		img.onload = this.bindSafely(function() {
			this.$.canvas.update();
		});
	}
});

enyo.kind({
	name: "enyo.sample.BlinkyTriangle",
	kind: "enyo.canvas.Shape",
	published: {
		highlightColor:"yellow"
	},
	renderSelf: function(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.bounds.l + this.bounds.w/2, this.bounds.t);
		ctx.lineTo(this.bounds.l, this.bounds.t + this.bounds.h);
		ctx.lineTo(this.bounds.l + this.bounds.w, this.bounds.t + this.bounds.h);
		ctx.lineTo(this.bounds.l + this.bounds.w/2, this.bounds.t);
		this.draw(ctx);
	},
	create: function() {
		this.inherited(arguments);
		this.jobName = "blinkMe_" + this.id;
		this.blinkMe();
	},
	destroy: function() {
		enyo.job.stop(this.jobName);
		this.inherited(arguments);
	},
	blinkMe: function() {
		var color = this.color;
		this.color = this.highlightColor;
		this.highlightColor = color;
		this.container.update();
		enyo.job(this.jobName, this.bindSafely("blinkMe"), 500);
	}
});
