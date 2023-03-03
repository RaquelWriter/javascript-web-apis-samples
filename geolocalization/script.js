const btn = document.getElementById('btn');
const country_container = document.getElementById('country-container');
const map = document.getElementById('map');

// Geolocalization API

// Check if we have in navigator the property geolocation
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
}
