(function (enyo, scope) {

	/**
	* Bounds hash for {@link enyo.canvas.Line#bounds}
	*
	* @typedef {enyo.canvas.Line~Bounds}
	* @type {Object}
	* @property {String} Style    - Stroke style
	* @property {Number} width    - Line width
	* @property {String} cap      - Line cap
	* @property {Number} start_x  - X coordinate of start of line
	* @property {Number} start_y  - Y coordinate of start of line
	* @property {Number} finish_x - X coordinate of finish of line
	* @property {Number} finish_y - Y coordinate of finish of line
	*/

	/**
	* _enyo.canvas.Line_ is a canvas control that draws a line according to the
	* parameters specified by {@link enyo.canvas.Line#bounds}.
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
			* Bounds of line
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