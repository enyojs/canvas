### Looking for the issue tracker?
It's moved to [https://enyojs.atlassian.net](https://enyojs.atlassian.net).

---

## Enyo Canvas Library

Canvas is a UI library for Enyo 2.

This shows how to wrap the HTML canvas element as a enyo.Control, but have
components as children of the canvas that are based on enyo.UIComponent so
they're not their own DOM nodes.

* enyo.canvas.Control - base kind for all renderable objects
    * enyo.canvas.Shape - base kind for all shapes (rectangle and circle)
        * enyo.canvas.Rectangle - render a rectangle
        * enyo.canvas.Circle - render a circle
        * enyo.canvas.Text - render a string of text with specified font
    * enyo.canvas.Image - render an image from a file

The library is mainly intended as a demonstration, rather than a complete
tool for canvas manipulation, and there are no changes or additional
features planned.
