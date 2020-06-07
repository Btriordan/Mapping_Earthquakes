// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([30, 30], 2);


// Add the GeoJSON to the map
//  L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data using pointToLayer
// L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
//    pointToLayer: function(feature, latlng) {
//     console.log(feature);
//      return L.marker(latlng)
//      .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//    }

//  }).addTo(map);

// Grabbing our GeoJSON data using onEachFeature
//L.geoJson(sanFranAirport, {
 //   onEachFeature: function(feature, layer) {
  //    console.log(layer);
 //     layer.bindPopup();
//     }
//}).addTo(map);


// Using PoingToLayer function


// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = { 
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create teh map object wiht center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5,-98.5],
    zoom: 3,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map)

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//Accessing the airport GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
