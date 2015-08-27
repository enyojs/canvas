/**
* Contains the declaration for the {@link module:canvas/Line~Line} kind.
* @module canvas/Line
*/

var
	kind = require('enyo/kind');

var
	Shape = require('./Shape');

/**
* Used to set parameters for drawing a line.
*
* @typedef {Object} module:canvas/Line~Line~Bounds
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
* {@link module:canvas/Line~Line} is a canvas control that draws a line according to
* the parameters specified by the [bounds]{@link module:canvas/Line~Line#bounds}
* property.
*
* @class Line
* @extends module:canvas/Shape~Shape
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Line~Line.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Line',

	/**
	* @private
	*/
	kind: Shape,

	/**
	* @lends module:canvas/Line~Line.prototype
	* @private
	*/
	published: {
		/**
		* Bounds of the line.
		*
		* @type {module:canvas/Line~Line~Bounds}
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
