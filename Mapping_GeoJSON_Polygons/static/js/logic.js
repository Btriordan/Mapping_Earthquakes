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
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = { 
    "Streets": streets,
    "satelliteStreets": satelliteStreets
};

// Create teh map object wiht center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7,-79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

L.control.layers(baseMaps).addTo(map)

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//Accessing the airport GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/Btriordan/Mapping_Earthquakes/Mapping_eoJSON_Polygons/torontoNeighborhoods.json"

// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
    
    //{
    //style: myStyle,
    //  onEachFeature: function(feature, layer) {
    //      layer.bindPopup("<h3> AirlineL " + feature.properties.airline + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>")
    //  }
});
