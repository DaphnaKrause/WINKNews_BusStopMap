let mymap = L.map('map3').setView([26.612539, -81.866487], 11.00)

L.tileLayer('https://api.mapbox.com/styles/v1/daphnakrause/cjvzmdlpr1e5h1cnx608ujzq5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFwaG5ha3JhdXNlIiwiYSI6ImNqb3g3amh5YzI1bXQzcHFpNmhwbGdoa24ifQ.LUUR7xHl_RKZPM2iEL-98A', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom:18
}).addTo(mymap);

var greyIconlight = new L.Icon({
	iconUrl: 'images/marker-icon-reddark.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

var greyIcon = new L.Icon({
	iconUrl: 'images/marker-icon-orange.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

var blackIcon = new L.Icon({
	iconUrl: 'images/marker-icon-yellow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

var blackIcondark = new L.Icon({
	iconUrl: 'images/marker-icon-blue.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

for ( let i = 0;  i < placesfive.length; i++) {
  L.marker( [placesfive[i].latitude, placesfive[i].longitude ], {icon: greyIconlight})
  .bindPopup( '<h3>' + placesfive[i].placeName + '</h3>' + '<p>' +     placesfive[i].descrip + '</p>')
  .addTo( mymap );

}

  for ( let i = 0;  i < placesfivethirty.length; i++) {
  L.marker( [placesfivethirty[i].latitude, placesfivethirty[i].longitude ], {icon: greyIcon})
  .bindPopup( '<h3>' + placesfivethirty[i].placeName + '</h3>' + '<p>' +   placesfivethirty[i].descrip + '</p>')
  .addTo( mymap );

}

  for ( let i = 0;  i < placessix.length; i++) {
  L.marker( [placessix[i].latitude, placessix[i].longitude ], {icon: blackIcon})
  .bindPopup( '<h3>' + placessix[i].placeName + '</h3>' + '<p>' +     placessix[i].descrip + '</p>')
  .addTo( mymap );

}

  for ( let i = 0;  i < placesfiltered.length; i++) {
  L.marker( [placesfiltered[i].latitude, placesfiltered[i].longitude ], {icon: blackIcondark}).bindPopup( '<h3>' + placesfiltered[i].placeName + '</h3>' + '<p>' +     placesfiltered[i].descrip + '</p>').addTo( mymap );

}
