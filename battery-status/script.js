const batteryLevel = document.querySelector('#batteryLevel');
const batteryCharging = document.querySelector('#batteryCharging');
const batteryChargingTime = document.querySelector('#batteryChargingTime');
const batteryDischargingTime = document.querySelector(
  '#batteryDischargingTime'
);

// Access to the battery API

const battery = () => {
  if ('getBattery' in navigator) {
    navigator.getBattery().then((battery) => {
      console.log(battery);

      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
      }
      updateAllBatteryDetails();

      // Battery charging change
      battery.addEventListener('chargingchange', () => {
        updateChargingInfo();
      });

      function updateChargingInfo() {
        const isCharging = battery.charging ? 'Yes' : 'No';
        batteryCharging.innerHTML = isCharging;
      }

      // Battery charging time
      battery.addEventListener('chargingtimechange', () => {
        chargingTimeChange();
      });
      function chargingTimeChange() {
        batteryChargingTime.innerHTML = battery.chargingTime + ' seconds';
      }
      // Battery discharging time
      battery.addEventListener('dischargingtimechange', () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        batteryDischargingTime.innerHTML = battery.dischargingTime + ' seconds';
      }
      // Battery status
      battery.addEventListener('levelchange', () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = (battery.level * 100).toFixed(1) + ' %';
        batteryLevel.innerHTML = level;
      }
    });
  }
};
battery();
