(function (enyo, scope) {

	/**
	* _enyo.canvas.Circle_ is a canvas control that draws a circle fitting the
	* parameters specified by {@link enyo.canvas.Control#bounds}.
	*
	* @class enyo.canvas.Circle
	* @extends enyo.canvas.Shape
	* @public
	*/
	enyo.kind(
		/** @lends enyo.canvas.Circle.prototype */ {
	
		/**
		* @private
		*/
		name: 'enyo.canvas.Circle',
		
		/**
		* @private
		*/
		kind: 'enyo.canvas.Shape',
		
		/**
		* @protected
		*/
		renderSelf: function (ctx) {
			ctx.beginPath();
			ctx.arc(this.bounds.l, this.bounds.t, this.bounds.w, 0, Math.PI*2);
			this.draw(ctx);
		}
	});

})(enyo, this);