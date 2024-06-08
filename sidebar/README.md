# Sidebar

A sidebar element is an element that allows to create visual side menus.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/sidebar/sidebar.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/sidebar/sidebar.css">
```

## Second you need to either specify a DIV element to be used as a sidebar or use js to create one

```html
<div id="mySideBar" is="hwk-sidebar" hidden></div>
```

OR

```javascript
var sidebar_element = new hwk.SideBar();
sidebar_element.setAttribute("id", "mySideBar");
sidebar_element.hide();
document.body.appendChild(sidebar_element);
```

## Third we need to show the sidebar

```javascript
var mySideBar = document.getElementById("mySideBar");
mySideBar.show();
```


# Notes

* The sidebar will take-up the whole screen on devices with screen smaller than 600px (may change in the future)
* The sidebar can take-up the whole screen on all devices by setting the `hwk-showmode` attribute to `fullscreen`
* The sidebar can automatically close if an element inside of it with the attribute `hwk-sidebar-close-button` set to `true` is clicked.
* To show the sidebar at the right you can set `side` attribute to `right`.