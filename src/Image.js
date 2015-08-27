/**
* Contains the declaration for the {@link module:canvas/Image~Image} kind.
* @module canvas/Image
*/

var
	kind = require('enyo/kind');

var
	Control = require('./Control');

/**
* {@link module:canvas/Image~Image} is a canvas control that draws an image, stretched
* to fit the rectangle specified by the [bounds]{@link module:canvas/Image~Image#bounds}
* property.
*
* @class Image
* @extends module:canvas/Control~Control
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Image~Image.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Image',

	/**
	* @private
	*/
	kind: Control,

	/**
	* @lends module:canvas/Image~Image.prototype
	* @private
	*/
	published: {
		/**
		* Source URL for the image.
		*
		* @type {String}
		* @default ''
		* @public
		*/
		src: ''
	},

	/**
	* @private
	*/
	create: function () {
		this.image = new Image();
		this.inherited(arguments);
		this.srcChanged();
	},

	/**
	* @private
	*/
	srcChanged: function () {
		if (this.src) {
			this.image.src = this.src;
		}
	},

	/**
	* @protected
	*/
	renderSelf: function (ctx) {
		ctx.drawImage(this.image, this.bounds.l, this.bounds.t);
	}
});
