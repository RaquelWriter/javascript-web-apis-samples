<!-- ABOUT THE WEB APIs SAMPLES -->

# About The WEB APIS SAMPLES WITH JAVASCRIPT

This is a sample code for showing the consuming web apis with Vanilla Javascript.

### Built With

Javascript, HTML5, CSS.

<!-- GETTING STARTED -->

## Getting Started

Download the zip and unzip. Open index.html in your browser.

## battery-status folder

With this project you can check the battery status of your computer, using only the Battery Status Web Api from navigation method of the browser.

Sample code:

```javascript
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', () => {
    batteryIsCharging = battery.charging;
  });
});
```

### More info about Navigator.getBattery() method.

[Navigator.getBattery()](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)

## localstorage folder

The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

Sample code:

```javascript
let todos;
if (localStorage.getItem('todos') === null) {
  todos = [];
} else {
  todos = JSON.parse(localStorage.getItem('todos'));
}
```

Get item from the storage:

```javascript
localStorage.getItem('todos');
```

Set item (add data to the local storage):

```javascript
localStorage.setItem('todos', 'Go to gym');
```

Remove item:

```javascript
localStorage.removeItem('todos');
```

Remove all localStorage:

```javascript
localStorage.clear();
```

### More info about Window.localStorage()

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
