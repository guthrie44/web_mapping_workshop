///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'guthrie44.l8mm4ame'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZ3V0aHJpZTQ0IiwiYSI6InRjRjl6RzQifQ.avouLbyQe8zbHicCcXbqhw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

//add data
var datafileToAdd = 'data/bike_routes.geojson';

var featureLayer = L.mapbox.featureLayer();
  
  featureLayer.loadUrl(dataFileToAdd);
  featureLayer.addTo(map);
  
featureLayer.on('ready' function(){
  this.setStyle({
    "stroke": "g777777",
    "stroke-width": 2,
    "fill": "g777777",
    "fill-opacity": 0.5
  });
  map.fitBounds(featureLayer.getbounds());
});

