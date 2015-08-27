/**
* Contains the declaration for the {@link module:canvas/Text~Text} kind.
* @module canvas/Text
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* {@link module:canvas/Text~Text} is a canvas control that draws a text string.
*
* @class Text
* @extends module:canvas/Shape~Shape
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Text~Text.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Text',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @lends module:canvas/Text~Text.prototype
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
		 * [bounds]{@link module:canvas/Control~Control#bounds} property.
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
