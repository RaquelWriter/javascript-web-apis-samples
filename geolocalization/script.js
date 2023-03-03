const btn = document.getElementById('btn');
const country_container = document.getElementById('country-container');
const map = document.getElementById('map');

// Geolocalization API

const getMyLocation = () => {
  // Check if we have in navigator the property geolocation
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      map.innerHTML = `<iframe
        src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed"
        width="100%"
        height="100%"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      ></iframe
      >;`;
    });
  }
};

btn.addEventListener('click', getMyLocation);
