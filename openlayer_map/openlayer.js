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
function panHome() {
  view.animate({
    center: ourLoc,
    duration: 2000
  });
}
