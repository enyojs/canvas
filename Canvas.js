(function (enyo, scope) {

	/**
	* _enyo.Canvas_ is a control that generates a &lt;canvas&gt; HTML tag. It may
	* contain other canvas components derived not from {@link enyo.Control},
	* but from {@link enyo.canvas.Control}. These components are not
	* true controls in the sense of being DOM elements; they are, instead, shapes
	* drawn into the canvas.
	*
	* @ui
	* @class enyo.Canvas
	* @extends enyo.Control
	* @public
	*/
	enyo.kind(
		/** @lends enyo.Canvas.prototype */ {
		
		/**
		* @private
		*/
		name: 'enyo.Canvas',
		
		/**
		* @private
		*/
		kind: 'enyo.Control',
		
		/**
		* @private
		*/
		tag: 'canvas',
		
		/**
		* Hash containing the default height (500) and width (500) for the canvas
		*
		* @see {@link enyo.Control#attributes}
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
		defaultKind: 'enyo.canvas.Control',
		
		/**
		* Canvas tags do not have any content
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
		* addChild and removeChild of Control kind assumes children are Controls.
		* CanvasControls are not, so we use UiComponent's version, the superkind of Control
		*
		* @private
		*/
		addChild: function () {
			enyo.UiComponent.prototype.addChild.apply(this, arguments);
		},

		/*
		* addChild and removeChild of Control kind assumes children are Controls.
		* CanvasControls are not, so we use UiComponent's version, the superkind of Control
		*
		* @private
		*/
		removeChild: function () {
			enyo.UiComponent.prototype.removeChild.apply(this, arguments);
		},
		
		/**
		* Iterates over its children and renders each onto the canvas
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

})(enyo, this);