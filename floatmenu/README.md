# FloatMenu

A floatmenu element is an element that allows to create visual floating menus.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/floatmenu/floatmenu.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/floatmenu/floatmenu.css">
```

## Second you need to either specify a DIV element to be used as a float-menu or use js to create one

```html
<div id="myFloatMenu" is="hwk-floatmenu" hidden></div>
```

OR

```javascript
var floatmenu_element = new hwk.FloatMenu();
floatmenu_element.setAttribute("id", "myFloatMenu");
floatmenu_element.hide();
document.body.appendChild(floatmenu_element);
```

## Third we need to display the float-menu

```javascript
var myFloatMenu = document.getElementById("myFloatMenu");
myFloatMenu.show();
```

OR (to position the element)

```javascript
myFloatMenu.showOnPoint(0, 0); // Top-Left of the screen
myFloatMenu.showOnElement(document.getElementById("element")); // Top-Left of the passed-in element.
myFloatMenu.showForElement(document.getElementById("element")); // Bottom-Center of the passed-in element.
```

# Notes

* The offset of a floating menu can be easily modified by setting `hwk-floatmenu-offsetx` and `hwk-floatmenu-offsety` attributes to the offset for each axis. (Only use numbers which are assumed to be pixels)