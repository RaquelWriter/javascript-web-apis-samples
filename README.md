<!-- ABOUT THE WEB APIs SAMPLES -->

# About The WEB APIS SAMPLES WITH JAVASCRIPT

This is a sample code for showing the consuming web apis with Vanilla Javascript.

### Built With

Javascript, HTML5, CSS.

<!-- GETTING STARTED -->

## Getting Started

Download the zip and unzip. Open index.html in your browser.

## battery-status folder

With this project you can check the battery status of your computer, using only the web api object battery from navigation method web api built in the browser.

Sample code:

...

```javascript
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
...
```

## More info about Navigator.getBattery() method.

[Navigator.getBattery()](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API)
