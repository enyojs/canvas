(function (enyo, scope) {

	/**
	* {@link enyo.canvas.Circle} is a canvas control that draws a circle fitting
	* the parameters specified by the [bounds]{@link enyo.canvas.Control#bounds}
	* property on {@link enyo.canvas.Control}. 
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