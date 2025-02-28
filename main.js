require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/GeoJSONLayer"
], function(Map, MapView, GeoJSONLayer) {

  // URL to the new GeoJSON file
  const geojsonUrl = "file:///Users/siennasilvest/Desktop/map%20copy.geojson"; // Update this line with the path to your new GeoJSON file

  // Create a GeoJSON layer
  const geojsonLayer = new GeoJSONLayer({
    url: geojsonUrl
  });

  // Create a map and add the GeoJSON layer to it
  const map = new Map({
    basemap: "topo-vector",
    layers: [geojsonLayer]
  });

  // Create a view and set its container to the div with id "viewDiv"
  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-100.33, 25.69], // Longitude, latitude
    zoom: 3
  });
});
