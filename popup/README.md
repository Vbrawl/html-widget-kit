# Popup

A popup element is an element that allows to create visual popup menus.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/popup/popup.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/popup/popup.css">
```

## Second you need to either specify a DIV element to be used as a popup or use js to create one

```html
<div id="myPopup" is="hwk-popup" hidden></div>
```

OR

```javascript
var popup_element = new hwk.Popup();
popup_element.setAttribute("id", "myPopup");
popup_element.hide();
document.body.appendChild(popup_element);
```

## Third we need to display the popup

```javascript
var myPopup = document.getElementById("myPopup");
myPopup.show();
```

# Notes

* The popup automatically closes when the backdrop (the black background) is clicked. You can disable this feature by setting `hwk-popup-autoclose` attribute to `false`
* To automatically close the popup with a button (and no extra javascript) you can provide an element with the `hwk-popup-close-button` attribute set to `true`.