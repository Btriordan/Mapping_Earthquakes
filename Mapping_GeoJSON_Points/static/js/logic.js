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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = { 
    Street: streets,
    Dark: dark
};

// Create teh map object wiht center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30,30],
    zoom: 2,
    layers: [streets]
});

L.control.layers(baseMaps).addTo(map)

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Btriordan/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
