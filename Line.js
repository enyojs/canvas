(function (enyo, scope) {

	/**
	* Used to set parameters for drawing a line.
	*
	* @typedef {Object} enyo.canvas.Line~Bounds
	* @property {String} Style    - Stroke style.
	* @property {Number} width    - Line width.
	* @property {String} cap      - Line cap.
	* @property {Number} start_x  - x-coordinate of start of line.
	* @property {Number} start_y  - y-coordinate of start of line.
	* @property {Number} finish_x - x-coordinate of finish of line.
	* @property {Number} finish_y - y-coordinate of finish of line.
	* @public
	*/

	/**
	* {@link enyo.canvas.Line} is a canvas control that draws a line according to
	* the parameters specified by the [bounds]{@link enyo.canvas.Line#bounds}
	* property.
	*
	* @class enyo.canvas.Line
	* @extends enyo.canvas.Shape
	* @public
	*/
	enyo.kind(
		/** @lends enyo.canvas.Line.prototype */ {

		/**
		* @private
		*/
		name: 'enyo.canvas.Line',

		/**
		* @private
		*/
		kind: 'enyo.canvas.Shape',

		/**
		* @lends enyo.canvas.Line.prototype
		* @private
		*/
		published: {
			/**
			* Bounds of the line.
			*
			* @type {enyo.canvas.Line~Bounds}
			* @default null
			* @public
			*/
			bounds: null
		},

		/**
		* @protected
		*/
		renderSelf: function (ctx) {
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle = this.bounds.Style;
			ctx.lineWidth = this.bounds.width;
			ctx.lineCap = this.bounds.cap;
			ctx.moveTo(this.bounds.start_x, this.bounds.start_y);
			ctx.lineTo(this.bounds.finish_x, this.bounds.finish_y);
			ctx.stroke();
			ctx.restore();
		}

	});

})(enyo, this);