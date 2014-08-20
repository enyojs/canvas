(function (enyo, scope) {

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
	* @class enyo.canvas.Control
	* @extends enyo.UiComponent
	* @public
	*/
	enyo.kind(
		/** @lends enyo.canvas.Control.prototype */ {

		/**
		* @private
		*/
		name: 'enyo.canvas.Control',

		/**
		* @private
		*/
		kind: 'enyo.UiComponent',

		/**
		* @private
		*/
		defaultKind: 'enyo.canvas.Control',

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
			this.bounds = {l: enyo.irand(400), t: enyo.irand(400), w: enyo.irand(100), h: enyo.irand(100)};
			this.inherited(arguments);
		},

		/**
		* @private
		*/
		importProps: function (props) {
			this.inherited(arguments);
			if (props && props.bounds) {
				enyo.mixin(this.bounds, props.bounds);
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

})(enyo, this);