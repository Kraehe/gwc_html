console.log("oh no, looks like we have to deploy anti-cowboy measures!")

var ourLoc;
var view;
var map;

window.onload = setup;

function setup(){
  ourLoc = ol.proj.fromLonLat([-73.986768, 40.757896])

  view = new ol.View({

    center: ourLoc,
    zoom: 19

  });

  map = new ol.Map({

    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view

  });

}

// Pans to the a set location
function panHome() {
  view.animate({
    center: ourLoc,
    duration: 2000
  });
}

function panLocation() {
  var countryName = document.getElementById("country-name").value;
  if (countryName === "") {
    alert("You did not enter a country name!");
    return;
  }
  var query = "https://restcountries.eu/rest/v2/name/" + countryName;
  query = query.replace(/ /g, "%20");
  console.log(query);
  var countryRequest = new XMLHttpRequest();
  countryRequest.open('GET', query, false);
  countryRequest.send();

  console.log("Ready State: " + countryRequest.readyState);
  console.log("Status: " + countryRequest.status);
  console.log("Response: " + countryRequest.responseText);

  if (countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.responseText === "") {
    console.log("Request had an error.");
    return;
    }

  var countryInfo = JSON.parse(countryRequest.responseText);


  var lon = countryInfo[0].latlng[1]
  var lat = countryInfo[0].latlng[0]

  console.log(countryName+": lon"+lon+"lat: "+lat)
  var location = ol.proj.fromLonLat([lon, lat])

  view.animate({
    center: location,
    duration: 2000,
    zoom:8
  });

}
/* ASYCHRONOUS FUNCTION CALL

function makeCountryRequest() {

  var countryName = document.getElementById("country-name").value;
  if (countryName === "") {
    alert("You did not enter a country name!");
    return;
  }
  var query = "https://restcountries.eu/rest/v2/name/" + countryName;
  query = query.replace(/ /g, "%20");
  console.log(query);
  var countryRequest = new XMLHttpRequest();
  countryRequest.open("GET", query, true);
  countryRequest.onload = processCountryRequest;
  countryRequest.send();
}

function processCountryRequest(){
  if (countryRequest.readyState != 4){
    return;
  }
  if (countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.responseText === "") {
    console.log("Request had an error.");
    return;
    }

  var countryInfo = JSON.parse(countryRequest.responseText);


  var lon = countryInfo[0].latlng[1]
  var lat = countryInfo[0].latlng[0]

  console.log(countryName+": lon"+lon+"lat: "+lat)
  var location = ol.proj.fromLonLat([lon, lat])

  view.animate({
    center: location,
    duration: 2000,
    zoom:5
  });
} */
