/**
* Contains the declaration for the {@link module:canvas/Shape~Shape} kind.
* @module canvas/Shape
*/

var
	kind = require('enyo/kind');

var
	Control = require('./Control');

/**
* {@link module:canvas/Shape~Shape} is the base kind for shapes that can be drawn into the
* canvas. It doesn't have a default rendering, but an event handler may call its
* [draw()]{@link module:canvas/Shape~Shape#draw} method.
*
* Kinds derived from this one should provide their own implementation of
* [renderSelf()]{@link module:canvas/Control~Control#renderSelf}. If more complex operations
* are needed for filled mode or outline mode, override the
* [fill()]{@link module:canvas/Shape~Shape#fill} method or the
* [outline()]{@link module:canvas/Shape~Shape#outline} method, respectively.
*
* @class Shape
* @extends module:canvas/Control~Control
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Shape~Shape.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Shape',

	/**
	* @private
	*/
	kind: Control,

	/**
	* @lends module:canvas/Shape~Shape.prototype
	* @private
	*/
	published: {
		/**
		* Color used to draw the interior of the shape.
		*
		* @type {String}
		* @default 'red'
		* @private
		*/
		color: 'red',

		/**
		* Color used to draw the outline of the shape.
		*
		* @type {String}
		* @default ''
		* @private
		*/
		outlineColor: ''
	},

	/**
	* @private
	*/
	fill: function (context) {
		context.fill();
	},

	/**
	* @private
	*/
	outline: function (context) {
		context.stroke();
	},

	/**
	* Draws the shape by invoking its [fill()]{@link module:canvas/Shape~Shape#fill} or
	* [outline()]{@link module:canvas/Shape~Shape#outline} method. Usually
	* invoked by the derived shape's [renderSelf()]{@link module:canvas/Shape~Shape#renderSelf}
	* method in response to the rendering of the canvas control's parent.
	*
	* @param {Context} context - The canvas context.
	* @public
	*/
	draw: function (context) {
		if (this.color) {
			context.fillStyle = this.color;
			this.fill(context);
		}
		if (this.outlineColor) {
			context.strokeStyle = this.outlineColor;
			this.outline(context);
		}
	}
});
