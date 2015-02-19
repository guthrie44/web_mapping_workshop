///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'guthrie44.l8mm4ame'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiZ3V0aHJpZTQ0IiwiYSI6InRjRjl6RzQifQ.avouLbyQe8zbHicCcXbqhw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

////////////////////////////add data
var dataFileToAdd = 'data/BikeRoutes.geoJSON';

var featureLayer = L.mapbox.featureLayer();
  
  featureLayer.loadURL(dataFileToAdd);
  featureLayer.addTo(map);
  
featureLayer.on('ready', function(){
  this.setStyle({
    "stroke": "g777777",
    "stroke-width": 2
  });
  map.fitBounds(featureLayer.getBounds());
});

////////////////////////////////

//add popup

//featureLayer.on('ready', function(){
  //this.eachLayer(function(layer){
    //layer.bindPopup('Trail Name: ' + layer.feature.properties.name);
  //});
//});

//clear the panel
map.on('click', function(){
  $('#info').fadeOut(200);
  $('#info').empty();
});

//handle click on route
var clickHandler = function(e){
  $('#info').empty();
  
  var feature = e.target.feature;
  
  $('#info').fadeIn(400, function(){
    var info = '';
    info = '<div>Check out this bike trail called ' + feature.properties.name + '</div>';
    $('#info').append(info);
  });
}

// register the click handler
featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.on('click', clickHandler);
  });
});
