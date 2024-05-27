# NotificationBox

A NotificationBox element is an element that allows to create visual notification boxes and notifications.

# Usage

## First step is to include the js/css.
```html
<script src="https://yourCDN/notificationbox/notificationbox.js" defer></script>
<link rel="stylesheet" href="https://yourCDN/notificationbox/notificationbox.css">
```

## Second you need to either specify a DIV element to be used as a notification box or use js to create one

```html
<div id="myNotificationBox" is="hwk-notificationbox"></div>
```

OR

```javascript
var notibox_element = new hwk.List();
notibox_element.setAttribute("id", "myNotificationBox");
document.body.appendChild(notibox_element);
```

## Third you need to add items to the object through JAVASCRIPT ONLY

```javascript
var myNotificationBox = document.getElementById("myNotificationBox");
myNotificationBox.addItem(new hwk.NotificationItem({key1: "value1", key2: "value2"}));
```