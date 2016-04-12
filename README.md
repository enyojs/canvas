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

## Samples

All samples reside in a consolidated sample app for Enyo and its libraries:
[enyo-strawman](https://github.com/enyojs/enyo-strawman)

## Copyright and License Information

Unless otherwise specified, all content, including all source code files and
documentation files in this repository are:

Copyright (c) 2012-2014 LG Electronics

Unless otherwise specified or set forth in the NOTICE file, all content,
including all source code files and documentation files in this repository are:
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this content except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
