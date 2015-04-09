var
	kind = require('enyo/kind');

var
	CanvasControl = require('./CanvasControl');

/**
* {@link enyo.canvas.Image} is a canvas control that draws an image, stretched
* to fit the rectangle specified by the [bounds]{@link enyo.canvas.Image#bounds}
* property.
*
* @class enyo.canvas.Image
* @extends enyo.canvas.Control
* @public
*/
module.exports = kind(
	/** @lends enyo.canvas.Image.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Image',

	/**
	* @private
	*/
	kind: CanvasControl,

	/**
	* @lends enyo.canvas.Image.prototype
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