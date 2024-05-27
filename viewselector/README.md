# ViewSelector

A ViewSelector element is an element that allows to create box with tabs and a panel for displaying different elements on user selection.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/viewselector/viewselector.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/viewselector/viewselector.css">
```

## Second you need to either specify a DIV element to be used as a viewselector or use js to create one

```html
<div id="myViewSelector" is="hwk-viewselector" hwk-viewselector-displayid="firstElement">
    <div hwk-viewselector-id="firstElement">Hi<div>
    <div hwk-viewselector-id="secondElement">Goodbye<div>
</div>
```

OR

```javascript
var viewselector_element = new hwk.ViewSelector();
viewselector_element.setAttribute("id", "myViewSelector");

const firstElement = document.createElement("div");
firstElement.setAttribute("hwk-viewselector-id", "firstElement"); // Set an ID for the view.
firstElement.textContent = 'Hi';

const lastElement = document.createElement("div");
lastElement.setAttribute("hwk-viewselector-id", "lastElement"); // Set an ID for the view.
lastElement.textContent = 'Goodbye';

viewselector_element.addView(firstElement); // Add firstElement to the selector
viewselector_element.addView(lastElement);  // Add lastElement to the selector
viewselector_element.setView();             // Set the view to the first view (firstElement)
document.body.appendChild(viewselector_element);
```

## Third you can change the active tab through javascript as follows

```javascript
var myViewSelector = document.getElementById("myViewSelector");
myViewSelector.setView("lastElement"); // Where lastElement is the viewselector-id of the view.
```


# Notes

* You can change the tab name for a view by setting `hwk-viewselector-name` attribute to the title you want the tab to have.