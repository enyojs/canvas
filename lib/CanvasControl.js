/**
* Contains the declaration for the {@link enyo.canvas.CanvasControl} kind.
* @module canvas/CanvasControl
*/

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	UiComponent = require('enyo/UiComponent');

/**
* Fires when this control is to be rendered.
*
* @event enyo.canvas.Control#event:onRender
* @param {Context} context - The active canvas context.
* @public
*/

/**
* {@link enyo.canvas.Control} is the base kind for items that live inside an
* {@link enyo.Canvas} control.
*
* If you're using this kind directly, you may implement an `onRender` event
* handler in the owner to handle drawing into the canvas.
*
* If you're deriving a new kind based on this one, override the
* [renderSelf()]{@link enyo.canvas.Control#renderSelf} method and use that for
* your drawing code.
*
*
* @namespace enyo.canvas
* @class enyo.canvas.Control
* @extends enyo.UiComponent
* @definedby module:canvas/CanvasControl
* @public
*/
var CanvasControl = module.exports = kind(
	/** @lends enyo.canvas.Control.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.canvas.Control',

	/**
	* @private
	*/
	kind: UiComponent,

	/**
	* @lends enyo.canvas.Control.prototype
	* @private
	*/
	published: {
		/**
		* Object with members `l` (left), `t` (top), `w` (width), and `h` (height).
		* The default constructor sets these properties to random values.
		*
		* @type {Object}
		* @public
		*/
		bounds: null
	},

	/**
	* @private
	*/
	events: {
		onRender: ''
	},

	/**
	* @private
	*/
	constructor: function () {
		this.bounds = {l: utils.irand(400), t: utils.irand(400), w: utils.irand(100), h: utils.irand(100)};
		this.inherited(arguments);
	},

	/**
	* @private
	*/
	importProps: function (props) {
		this.inherited(arguments);
		if (props && props.bounds) {
			utils.mixin(this.bounds, props.bounds);
			delete props.bounds;
		}
	},

	/**
	* @fires enyo.canvas.Control#event:onRender
	* @protected
	*/
	renderSelf: function (context) {
		this.doRender({context: context});
	},

	/**
	* @private
	*/
	render: function (context) {
		if (this.children.length) {
			this.renderChildren(context);
		} else {
			this.renderSelf(context);
		}
	},

	/**
	* @private
	*/
	renderChildren: function (context) {
		for (var i=0, c; (c=this.children[i]); i++) {
			c.render(context);
		}
	}
});

CanvasControl.prototype.defaultKind = CanvasControl;
