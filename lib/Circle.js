/**
* Contains the declaration for the {@link enyo.canvas.Circle} kind.
* @module canvas/Circle
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link enyo.canvas.Circle} is a canvas control that draws a circle fitting
* the parameters specified by the [bounds]{@link enyo.canvas.Control#bounds}
* property on {@link enyo.canvas.Control}. 
*
* @namespace enyo.canvas
* @class enyo.canvas.Circle
* @extends enyo.canvas.Shape
* @definedby module:canvas/Circle
* @public
*/
module.exports = kind(
	/** @lends enyo.canvas.Circle.prototype */ {

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
