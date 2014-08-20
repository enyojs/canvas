(function (enyo, scope) {

	/**
	* {@link enyo.canvas.Shape} is the base kind for shapes that can be drawn into the
	* canvas. It doesn't have a default rendering, but an event handler may call its
	* [draw()]{@link enyo.canvas.Shape#draw} method.
	*
	* Kinds derived from this one should provide their own implementation of
	* [renderSelf()]{@link enyo.canvas.Control#renderSelf}. If more complex operations
	* are needed for filled mode or outline mode, override the
	* [fill()]{@link enyo.canvas.Shape#fill} method or the
	* [outline()]{@link enyo.canvas.Shape#outline} method, respectively.
	*
	* @class enyo.canvas.Shape
	* @extends enyo.canvas.Control
	* @public
	*/
	enyo.kind(
		/** @lends enyo.canvas.Shape.prototype */ {

		/**
		* @private
		*/
		name: 'enyo.canvas.Shape',

		/**
		* @private
		*/
		kind: 'enyo.canvas.Control',

		/**
		* @lends enyo.canvas.Shape.prototype
		* @private
		*/
		published: {
			/**
			* Color used to draw the interior of the shape.
			*
			* @type {String}
			* @default 'red'
			* @private
			*/
			color: 'red',

			/**
			* Color used to draw the outline of the shape.
			*
			* @type {String}
			* @default ''
			* @private
			*/
			outlineColor: ''
		},

		/**
		* @private
		*/
		fill: function (context) {
			context.fill();
		},

		/**
		* @private
		*/
		outline: function (context) {
			context.stroke();
		},

		/**
		* Draws the shape by invoking its [fill()]{@link enyo.canvas.Shape#fill} or
		* [outline()]{@link enyo.canvas.Shape#outline} method. Usually
		* invoked by the derived shape's [renderSelf()]{@link enyo.canvas.Shape#renderSelf}
		* method in response to the rendering of the canvas control's parent.
		*
		* @param {Context} context - The canvas context.
		* @public
		*/
		draw: function (context) {
			if (this.color) {
				context.fillStyle = this.color;
				this.fill(context);
			}
			if (this.outlineColor) {
				context.strokeStyle = this.outlineColor;
				this.outline(context);
			}
		}
	});

})(enyo, this);