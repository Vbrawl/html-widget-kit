# MessageBox

This is a set of functions that replicate the `window.alert`, `window.confirm`, `window.prompt` methods.

The main difference is that `hwk.alert`, `hwk.confirm`, `hwk.prompt` use dom elements so they are more customizable and they also use asynchronous calls which could help with performance sometimes.

The source code of them can also be copied to implement custom message boxes.

# Dependencies
* hwk-popup

# Usage

## First step is to include the js/css.
```html
<!--Include dependencies-->
<script src="../popup/popup.js" defer></script>
<link rel="stylesheet" href="../popup/popup.css">

<!--Include messagebox functions-->
<script src="https://yourCDN/messagebox/messagebox.js"></script>
<link rel="stylesheet" href="https://yourCDN/messagebox/messagebox.css">
```

## Second you need to call a function from the messagebox.js

```javascript
hwk.alert("Alert");
```

# Custom Messge Boxes
The following will create a message box with a button element with the classes "class1" and "class2", it's text will be "Close Message Box" and on "click" event the message box is removed.
```javascript
const msg_box = hwk.createMessageBox([{
    tag: "button",
    classes: ["class1", "class2"],
    text: "Close Message Box",
    events: {
        click: () => {
            msg_box.remove();
        }
    }
}]);
```