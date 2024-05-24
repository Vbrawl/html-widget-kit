# List

A list element is an element that allows to create visual lists for interaction with the user.

# Usage

## First step is to include the js/css.
```html
<script src="https://github.com/Vbrawl/html-widget-kit/raw/main/list/list.js" defer></script>
<link rel="stylesheet" href="https://github.com/Vbrawl/html-widget-kit/raw/main/list/list.css">
```

## Second you need to either specify a DIV element to be used as a list or use js to create one

```html
<div id="myList" is="hwk-list"></div>
```

OR

```javascript
var list_element = new hwk.List();
list_element.setAttribute("id", "myList");
document.body.appendChild(list_element);
```

## Third you need to add items to the object through JAVASCRIPT ONLY

```javascript
var myList = document.getElementById("myList");
myList.addItem(new hwk.ListItem({key1: "value1", key2: "value2"}));
```