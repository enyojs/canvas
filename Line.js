enyo.kind({
    name: "enyo.canvas.Line",
    kind: "enyo.canvas.Shape",
    published: {
        "begin": [0, 0],
        "end": [0, 0],
        "lineWidth": 1 
    },
    constructor: function() {
        this.inherited(arguments);
        this.bounds = {};
    },
    renderSelf: function(ctx) {
        this.draw(ctx);
    },
    fill: function(ctx){
        // do nothing
    },
    outline: function(ctx) {
        ctx.lineWidth = this.lineWidth;
        if (this.outlineColor) {
            ctx.strokeStyle = this.outlineColor;
        }
        ctx.beginPath();
        ctx.moveTo(this.begin[0], this.begin[1]);
        ctx.lineTo(this.end[0], this.end[1]);
        ctx.stroke();
    }

});
