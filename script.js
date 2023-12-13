// Initializes a Leaflet map, sets its initial center,
// adds an OpenStreetMap tile layer, and is applied on full load.
document.addEventListener('DOMContentLoaded', function () {
  const mapCenter = [36.6748966, -121.6564952];
  const myMap = L.map('map').setView(mapCenter, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
    myMap
  );
});
