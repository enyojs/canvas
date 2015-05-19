/**
* Contains the declaration for the {@link enyo.canvas.Rectangle} kind.
* @module canvas/Rectangle
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link enyo.canvas.Rectangle} is a canvas control that draws a rectangle
* fitting the parameters specified by the [bounds]{@link enyo.canvas.Control#bounds}
* property.
*
* @namespace enyo.canvas
* @class enyo.canvas.Rectangle
* @extends enyo.canvas.Shape
* @definedby module:canvas/Rectangle
* @public
*/
module.exports = kind(
	/** @lends enyo.canvas.Rectange.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Rectangle',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @lends enyo.canvas.Rectangle.prototype
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
