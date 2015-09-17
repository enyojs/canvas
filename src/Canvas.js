/**
* Contains the declaration for the {@link module:canvas/Canvas~Canvas} kind.
* @module canvas/Canvas
*/

var
	kind = require('enyo/kind');

var
	Control = require('./Control'),
	UiComponent = require('enyo/UiComponent'),
	Control = require('enyo/Control');

/**
* {@link module:canvas/Canvas~Canvas} is a control that generates a &lt;canvas&gt; HTML tag.
* It may contain other canvas components derived not from {@link module:enyo/Control~Control},
* but from {@link module:canvas/Control~Control}. These components are not true controls
* in the sense of being DOM elements; they are, instead, shapes drawn into the
* canvas.
*
* @ui
* @class Canvas
* @extends module:enyo/Control~Control
* @public
*/
module.exports = kind(
	/** @lends module:canvas/Canvas~Canvas.prototype */ {

	/**
	* @private
	*/
	name: 'enyo.Canvas',

	/**
	* @private
	*/
	kind: Control,

	/**
	* @private
	*/
	tag: 'canvas',

	/**
	* Hash containing the default height `(500)` and width `(500)` for the canvas.
	*
	* @see {@link module:enyo/Control~Control#attributes}
	* @public
	*/
	attributes: {
		// Width of the canvas element
		width: 500,
		// Height of the canvas element
		height: 500
	},

	/**
	* @private
	*/
	defaultKind: Control,

	/**
	* Canvas tags do not have any content.
	*
	* @private
	*/
	generateInnerHtml: function () {
		return '';
	},

	/**
	* @private
	*/
	teardownChildren: function () {
	},

	/**
	* @private
	*/
	rendered: function () {
		this.renderChildren();
	},

	/*
	* The `addChild()` method of {@link module:enyo/Control~Control} assumes that the child
	* being added is an instance of `enyo.Control`. Because Controls are
	* not instances of `enyo.Control`, we instead call the `addChild()` method
	* on {@link module:enyo/UiComponent~UiComponent}, the superkind of `enyo.Control`.
	*
	* @private
	*/
	addChild: function () {
		UiComponent.prototype.addChild.apply(this, arguments);
	},

	/*
	* The `removeChild()` method of {@link module:enyo/Control~Control} assumes that the child
	* being removed is an instance of `enyo.Control`. Because Controls are
	* not instances of `enyo.Control`, we instead call the `removeChild()` method
	* on {@link module:enyo/UiComponent~UiComponent}, the superkind of `enyo.Control`.
	*
	* @private
	*/
	removeChild: function () {
		UiComponent.prototype.removeChild.apply(this, arguments);
	},

	/**
	* Iterates over the canvas's children, rendering each onto the canvas.
	*
	* @private
	*/
	renderChildren: function (ctx) {
		var canvas = this.hasNode();
		if (!ctx) {
			if (canvas.getContext) {
				ctx = canvas.getContext('2d');
			}
		}
		if (ctx) {
			for (var i=0, c; (c=this.children[i]); i++) {
				c.render(ctx);
			}
		}
	},

	/**
	* Refreshes the canvas context, clears existing drawings, and redraws all
	* of the children.
	*
	* @public
	*/
	update: function () {
		var canvas = this.hasNode();
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');
			var b = this.getBounds();
			// clear canvas
			ctx.clearRect(0, 0, b.width, b.height);
			this.renderChildren(ctx);
		}
	}
});
