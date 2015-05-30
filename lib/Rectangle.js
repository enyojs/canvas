/**
* Contains the declaration for the {@link module:canvas/Rectangle~Rectangle} kind.
* @module canvas/Rectangle
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link module:canvas/Rectangle~Rectangle} is a canvas control that draws a rectangle
* fitting the parameters specified by the [bounds]{@link module:canvas/Control~Control#bounds}
* property.
*
* @class Rectangle
* @extends module:canvas/Shape~Shape
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Rectange~Rectange.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Rectangle',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @lends module:canvas/Rectangle~Rectangle.prototype
	* @private
	*/
	published: {
		/**
		* If `true`, clears the area of the rectangle instead of drawing it.
		*
		* @type {Boolean}
		* @default false
		* @public
		*/
		clear: false
	},

	/**
	* @protected
	*/
	renderSelf: function (ctx) {
		if (this.clear) {
			ctx.clearRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
		} else {
			this.draw(ctx);
		}
	},

	/**
	* @private
	*/
	fill: function (ctx) {
		ctx.fillRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
	},

	/**
	* @private
	*/
	outline: function (ctx) {
		ctx.strokeRect(this.bounds.l, this.bounds.t, this.bounds.w, this.bounds.h);
	}
});
