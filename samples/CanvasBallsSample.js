enyo.kind({
	name:"enyo.sample.CanvasBallsSample",
	kind:"Control",
	style:"padding:15px;",
	components: [
		{kind:"Canvas", style: "border: 1px solid black;", attributes: {width: 280, height: 300}, components: [
			// a container for the balls
			{name: "ballpit", kind: "canvas.Control"},
			// a visible shelf to bounce off of
			{kind: "canvas.Rectangle", bounds: {l: 0, t: 290, w: 300, h: 10}},
			// an FPS counter
			{name:"fpsCounter", kind: "canvas.Text", bounds: {l: 0, t: 15}, color: "black"}
		]},
		{tag: "br"},
		// Reset the balls / change the number
		{tag: "button", content: "Reset", ontap: "reset"},
		{tag: "br"},
		{tag: "span", content:"Balls: "},
		{kind: "onyx.InputDecorator", components:[
			{kind: "onyx.Input", name: "balls", value: "10", placeholder: "Number of Balls"}
		]}
	],
	published: {
		// force of gravity
		accel: 9.8,
		// number of balls to show
		balls: 10
	},
	setupBalls: function() {
		// pause loop to update the balls
		if (this.cancel) {
			enyo.cancelRequestAnimationFrame(this.cancel);
		}
		this.loopStart = Date.now();
		this.frame = 0;
		this.start = Date.now();
		this.$.ballpit.destroyClientControls();
		var colors = [ "green", "blue", "black", "brown", "red", "orange"];
		var bounce, color, t, l;
		for (var i = 0; i < this.balls; i++) {
			// bounce from 0.30 to 0.99
			bounce = (enyo.irand(69) + 30) / 100;
			color = colors[enyo.irand(colors.length)];
			t = enyo.irand(375);
			l = 10 + (enyo.irand(27) * 10);
			this.$.ballpit.createComponent({
				kind: "canvas.Circle",
				bounds: {l: l, t: t, w: 10},
				color: color,
				bounce: bounce,
				vel: 0,
				owner: this});
		}
		// (re)start loop
		enyo.asyncMethod(this,"loop");
	},
	rendered: function() {
		this.setupBalls();
	},
	destroy: function() {
		if (this.cancel) {
			enyo.cancelRequestAnimationFrame(this.cancel);
		}
		this.inherited(arguments);
	},
	loop: function() {
		this.frame++;
		// update ball positions
		for (var i = 0, b; (b = this.$.ballpit.children[i]); i++) {
			if (b.bounds.t + b.bounds.w > this.$.rectangle.bounds.t) {
				// hits the ground, bounce back with X% of velocity
				b.vel = -b.vel * b.bounce;
				b.bounds.t = this.$.rectangle.bounds.t - b.bounds.w;
			} else if (b.bounds.t < b.bounds.w) {
				// prevent balls from shooting over the ceiling
				b.bounds.t = b.bounds.w;
				b.vel = 0;
			}
			b.vel += this.accel * (Date.now() - this.start);
			// make the distances rather large
			b.bounds.t += (b.vel / 10000);
		}
		this.$.canvas.update();
		this.start = Date.now();
		this.cancel = enyo.requestAnimationFrame(enyo.bind(this,"loop"));
		// draw the framerate
		this.$.fpsCounter.setText(Math.floor(this.frame / ((Date.now() - this.loopStart) / 1000)));
	},
	reset: function() {
		var inode = this.$.balls.hasNode();
		var newballs = inode ? parseInt(inode.value,0) : this.balls;
		if (isFinite(newballs) && newballs >= 0 && newballs != this.balls) {
			// update the number of balls
			this.setBalls(newballs);
		} else {
			// reset the current balls without destroying / recreating them
			for (var i = 0, b; (b = this.$.ballpit.children[i]); i++) {
				b.bounds.t = enyo.irand(375);
				b.vel = 0;
			}
		}
	},
	ballsChanged: function(inOldBalls) {
		this.setupBalls();
	}
});
