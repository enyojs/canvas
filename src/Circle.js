/**
* Contains the declaration for the {@link module:canvas/Circle~Circle} kind.
* @module canvas/Circle
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link module:canvas/Circle~Circle} is a canvas control that draws a circle fitting
* the parameters specified by the [bounds]{@link module:canvas/Control~Control#bounds}
* property on {@link module:canvas/Control~Control}. 
*
* @class Circle
* @extends module:canvas/Shape~Shape
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Circle~Circle.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Circle',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @protected
	*/
	renderSelf: function (ctx) {
		ctx.beginPath();
		ctx.arc(this.bounds.l, this.bounds.t, this.bounds.w, 0, Math.PI*2);
		this.draw(ctx);
	}
});
