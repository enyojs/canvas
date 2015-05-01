/**
* Contains the declaration for the {@link enyo.canvas.Text} kind.
* @module canvas/Text
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link enyo.canvas.Text} is a canvas control that draws a text string.
*
* @namespace enyo.canvas
* @class enyo.canvas.Text
* @extends enyo.canvas.Shape
* @definedby module:canvas/Text
* @public
*/
module.exports = kind(
	/** @lends enyo.canvas.Text.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Text',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @lends enyo.canvas.Text.prototype
	* @private
	*/
	published: {
		/**
		 * The text to draw.
		 *
		 * @type {String}
		 * @default ''
		 * @public
		 */
		text: '',

		/**
		 * CSS font specification used to select a font for drawing.
		 *
		 * @type {String}
		 * @default '12pt Arial'
		 * @public
		 */
		font: '12pt Arial',

		/**
		 * Text alignment within the rectangle specified by the
		 * [bounds]{@link enyo.canvas.Control#bounds} property.
		 *
		 * @type {String}
		 * @default 'left'
		 * @public
		 */
		align: 'left'
	},

	/**
	* @protected
	*/
	renderSelf: function (ctx) {
		ctx.textAlign = this.align;
		ctx.font = this.font;
		this.draw(ctx);
	},

	/**
	* @private
	*/
	fill: function (ctx) {
		ctx.fillText(this.text, this.bounds.l, this.bounds.t);
	},

	/**
	* @private
	*/
	outline: function (ctx) {
		ctx.strokeText(this.text, this.bounds.l, this.bounds.t);
	}
});
