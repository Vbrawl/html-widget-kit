# ContentFetch

A contentfetch element is an element that allows to dynamically load files.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/contentfetch/contentfetch.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/contentfetch/contentfetch.css">
```

## Second you need to either specify a DIV element to be used as a float-menu or use js to create one

```html
<div is="hwk-contentfetch" hwk-src="https://yourCDN/SomeTextBasedContent"></div>
```

OR

```javascript
var contentfetch_element = new hwk.ContentFetch();
contentfetch_element.setAttribute("hwk-src", "https://yourCDN/SomeTextBasedContent");
document.body.appendChild(contentfetch_element);
```

# Notes

* The contents can be updated by updating the `hwk-src` attribute to point to another URL, the content will instantly reload.