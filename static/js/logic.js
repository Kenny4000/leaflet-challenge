//LayerGroup for Earthquakes
let earthquakes = new L.LayerGroup();

//Variables to Reference Layers
let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 16,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
let Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

let baseMaps = {
    "Open Map": OpenTopoMap,
    "Esri Map": Esri_WorldImagery
};

//Map to Display the Layers for Open Map and Earthquakes
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4,
    layers: [OpenTopoMap, earthquakes]
});
//Add Layers of baseMaps to the Map with Control
L.control.layers(baseMaps).addTo(myMap);